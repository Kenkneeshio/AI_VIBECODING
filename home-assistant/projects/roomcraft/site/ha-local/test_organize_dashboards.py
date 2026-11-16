from copy import deepcopy
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest

import organize_dashboards as subject


class FakeAPI:
    def __init__(self):
        self.rows = {
            subject.SOURCE: {"id": "one", "url_path": subject.SOURCE, "mode": "storage", "title": "Main Dashboard"},
            subject.HOME: {"id": "two", "url_path": subject.HOME, "mode": "storage", "title": "Roomcraft Home"},
        }
        self.configs = {
            subject.SOURCE: {"views": [{"cards": [{"entity": "light.example"}]}]},
            subject.HOME: {"title": "Roomcraft Home", "views": [{"path": "home"}], "roomcraft_layout": {"version": 2}},
        }
        self.writes = []

    def call(self, kind, **fields):
        if kind == "lovelace/dashboards/list":
            return deepcopy(list(self.rows.values()))
        if kind == "lovelace/config":
            return deepcopy(self.configs[fields["url_path"]])
        self.writes.append(kind)
        if kind == "lovelace/dashboards/create":
            self.rows[fields["url_path"]] = {**fields, "id": "three"}
        elif kind == "lovelace/dashboards/update":
            row = next(row for row in self.rows.values() if row["id"] == fields["dashboard_id"])
            row["title"] = fields["title"]
        elif kind == "lovelace/config/save":
            self.configs[fields["url_path"]] = deepcopy(fields["config"])
        else:
            raise AssertionError(kind)


class DashboardOrganizationTests(unittest.TestCase):
    def test_clone_names_and_idempotent_readback(self):
        api = FakeAPI()
        original = deepcopy(api.configs[subject.SOURCE])
        with TemporaryDirectory() as directory:
            backup = subject.apply(api, Path(directory))
            self.assertTrue(backup.is_file())
            self.assertEqual(api.configs[subject.COPY], original)
            self.assertEqual(api.configs[subject.SOURCE], original)
            self.assertEqual(api.configs[subject.HOME]["roomcraft_layout"], {"version": 2})
            self.assertEqual({path: api.rows[path]["title"] for path in subject.TITLES}, subject.TITLES)
            prior_writes = list(api.writes)
            subject.apply(api, Path(directory))
            self.assertEqual(api.writes, prior_writes)

    def test_refuses_to_replace_existing_custom_cell_dash(self):
        api = FakeAPI()
        api.rows[subject.COPY] = {"id": "three", "url_path": subject.COPY, "mode": "storage", "title": "Cell Dash"}
        api.configs[subject.COPY] = {"views": [{"different": True}]}
        with TemporaryDirectory() as directory:
            with self.assertRaisesRegex(RuntimeError, "differs"):
                subject.apply(api, Path(directory))
        self.assertEqual(api.writes, [])


if __name__ == "__main__":
    unittest.main()

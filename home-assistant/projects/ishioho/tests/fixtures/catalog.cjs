/* Deterministic synthetic scale fixture. Never generated from a home registry. */
const domains = ['sensor', 'binary_sensor', 'light', 'switch', 'fan', 'cover', 'button', 'select', 'number', 'automation', 'update', 'climate', 'vacuum', 'camera', 'calendar'];
const areas = ['kitchen', 'living', 'dining', 'bedroom'].map(area_id => ({area_id, name: `Example ${area_id}`}));
const entities = Array.from({length: 1005}, (_, index) => {
  const domain = domains[index % domains.length];
  const area = index % 5 === 0 ? null : areas[index % areas.length];
  return {
    entity_id: `${domain}.example_${String(index).padStart(4, '0')}`,
    name: `Example entity ${index}`,
    domain,
    area_id: area?.area_id || '',
    area_name: area?.name || '',
    device_id: `example_device_${Math.floor(index / 5)}`,
    device_name: `Example device ${Math.floor(index / 5)}`
  };
});
module.exports = {synthetic: true, areas, entities};

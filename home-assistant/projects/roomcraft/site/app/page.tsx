import { redirect } from "next/navigation";

// Keep the existing Roomcraft canvas application as a static document while
// Vinext supplies the authenticated, same-origin dashboard API routes.
export default function Home() {
  redirect("/editor");
}

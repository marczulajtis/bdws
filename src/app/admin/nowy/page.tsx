import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth";
import { AdminBar, NoAccess } from "../AdminBar";
import { Editor } from "../Editor";

export const metadata: Metadata = { title: "Nowy wpis", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function NewPost() {
  const { user, isAdmin } = await requireAdmin();
  return (
    <section className="wrap admin">
      <AdminBar email={user.email} />
      {isAdmin ? <Editor post={null} /> : <NoAccess />}
    </section>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import type { Post } from "@/lib/types";
import { AdminBar, NoAccess } from "../AdminBar";
import { Editor } from "../Editor";

export const metadata: Metadata = { title: "Edycja wpisu", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { supabase, user, isAdmin } = await requireAdmin();
  if (!isAdmin) {
    return (
      <section className="wrap admin">
        <AdminBar email={user.email} />
        <NoAccess />
      </section>
    );
  }
  const { data } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  return (
    <section className="wrap admin">
      <AdminBar email={user.email} />
      <Editor post={data as Post} />
    </section>
  );
}

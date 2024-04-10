import React from "react";
import { db } from "@/app/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/app/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
export default async function ShippetEdit(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);

  const snippet = await db.shippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}

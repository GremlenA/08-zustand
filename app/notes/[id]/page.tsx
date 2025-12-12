import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "../../../getQueryClient";
import { fetchNoteById } from "@/lib/api";
import NotePreviewClient from "../../@modal/(.)notes/[id]/NotePreview.client";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;

  return {
    title: `Note — ${id}`,
    description: "Note details",
    openGraph: {
      title: "Note",
      description: "Note details",
      type: "article",
      siteName: "NoteHub",
    },
  };
}


export default async function NotePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotePreviewClient noteId={id} />
    </HydrationBoundary>
  );
}

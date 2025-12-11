import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "../../../../getQueryClient";
import { fetchNoteById } from "@/lib/api";
import NoteModalClient from "./NoteModalClient";

interface ModalParams {
  params: { id: string };
}

export default async function ModalNotePage({ params }: ModalParams) {
  const { id } = params;

  const qc = getQueryClient();
  await qc.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <NoteModalClient noteId={id} />
    </HydrationBoundary>
  );
}

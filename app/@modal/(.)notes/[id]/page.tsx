import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "../../../../getQueryClient";
import { fetchNoteById } from "@/lib/api";
import NoteModalClient from "./NoteModalClient";

interface ModalParams {
  params: { noteId : string };
}

export default async function ModalNotePage({ params }: ModalParams) {
  const { noteId  } = params;

  const qc = getQueryClient();
  await qc.prefetchQuery({
    queryKey: ["note", noteId ],
    queryFn: () => fetchNoteById(noteId ),
  });

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <NoteModalClient noteId={noteId } />
    </HydrationBoundary>
  );
}

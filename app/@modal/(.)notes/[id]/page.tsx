import Modal from "@/components/Modal/Modal";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "../../../../getQueryClient";
import { fetchNoteById } from "@/lib/api";
import NotePreviewClient from "./NotePreview.client";
import { useRouter } from "next/navigation";

export default async function ModalNotePage({
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
    <Modal onClose={() => history.back()}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotePreviewClient noteId={id} />
      </HydrationBoundary>
    </Modal>
  );
}

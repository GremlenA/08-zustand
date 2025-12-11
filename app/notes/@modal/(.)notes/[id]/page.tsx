"use client";

import Modal from "@/components/Modal/Modal";
import NotePreviewClient from "../../../../../components/NotePreview/NotePreview"; 
import { useRouter } from "next/navigation";

export default function ModalNotePage({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NotePreviewClient noteId={params.id} />
    </Modal>
  );
}

"use client";

import Modal from "@/components/Modal/Modal";
import NotePreviewClient from "./NotePreview.client";
import { useRouter } from "next/navigation";

export default function NoteModalClient({ noteId }: { noteId: string }) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreviewClient noteId={noteId} />
    </Modal>
  );
}

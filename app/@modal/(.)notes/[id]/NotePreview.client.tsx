"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

export default function NotePreviewClient({ noteId }: { noteId: string }) {
  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    enabled: !!noteId,
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !note) return <p>Failed to load note</p>;

  return (
    <div>
      <h2>{note.title}</h2>
      <p><strong>Tag:</strong> {note.tag}</p>
      <p>{note.content}</p>
      <p><strong>Created:</strong> {new Date(note.createdAt).toLocaleString()}</p>
    </div>
  );
}

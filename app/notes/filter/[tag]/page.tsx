import NotesClient from "../../Notes.client";

export default function NotesByTagPage({
  params,
}: {
  params: { tag: string };
}) {
  return <NotesClient tag={params.tag} />;
}

import { Note } from "@/models/note";

type NoteCardProps = {
  note: Note;
  onOpenMenu: (note: Note) => void;
};
export default NoteCardProps;

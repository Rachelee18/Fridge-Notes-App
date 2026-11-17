import { NoteAction } from "@/models/note";

type NoteActionsMenuProps = {
  visible: boolean;
  actions: NoteAction[];
  onClose: () => void;
  onSelect: (action: NoteAction) => void;
};
export default NoteActionsMenuProps;
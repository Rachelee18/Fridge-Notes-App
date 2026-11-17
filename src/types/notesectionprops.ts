import { Note } from "@/models/note";
import { NoteSection as NoteSectionModel} from "@/models"

type NoteSectionProps = {
  section: NoteSectionModel;
  showDivider: boolean;
  onOpenMenu: (note: Note) => void;
};
export default NoteSectionProps;
import type { NoteActionIcon, NoteActionId } from '../types/note';

export interface Note {
  id: string;
  title: string;
  color: string;
  accent?: string;
  sharedWith?: string[];
  createdAt?: string;
}

export interface NoteSection {
  title: string;
  notes: Note[];
}

export interface NoteAction {
  id: NoteActionId;
  label: string;
  icon: NoteActionIcon;
}

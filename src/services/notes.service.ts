import { MOCK_DELAY_MS } from '../config/api';
import { NOTE_SECTIONS } from '../config/notes';
import type { NoteSection } from '../models/note';
import { noteSectionSchema } from '../schemas/notes.schema';

function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

class NotesService {
  async listSections(): Promise<NoteSection[]> {
    await wait(MOCK_DELAY_MS.notes);

    return noteSectionSchema.array().parse(NOTE_SECTIONS);
  }

  async deleteNote(sections: NoteSection[], id: string): Promise<NoteSection[]> {
    const parsed = noteSectionSchema.array().parse(sections);

    await wait(MOCK_DELAY_MS.notes / 3);

    return parsed.map((section) => ({
      ...section,
      notes: section.notes.filter((note) => note.id !== id),
    }));
  }
}

export const notesService = new NotesService();

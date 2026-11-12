import { useEffect, useState } from 'react';

import { NOTE_ACTIONS, NOTE_SECTIONS } from '../config/notes';
import type { Note, NoteAction, NoteSection } from '../models/note';
import { notesService } from '../services/notes.service';

export function useNotesViewModel() {
  const [sections, setSections] = useState<NoteSection[]>(NOTE_SECTIONS);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  useEffect(() => {
    let active = true;

    notesService.listSections().then((loadedSections) => {
      if (active) {
        setSections(loadedSections);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const openMenu = (note: Note) => {
    setSelectedNote(note);
  };

  const closeMenu = () => {
    setSelectedNote(null);
  };

  const deleteSelected = async () => {
    if (selectedNote === null) {
      return;
    }

    const nextSections = await notesService.deleteNote(sections, selectedNote.id);

    setSections(nextSections);
    setSelectedNote(null);
  };

  const handleAction = (action: NoteAction) => {
    if (action.id === 'delete') {
      void deleteSelected();
      return;
    }

    closeMenu();
  };

  const createNote = () => {
    // Stub: mantém o comportamento atual do FAB.
  };

  return {
    sections,
    actions: NOTE_ACTIONS,
    selectedNote,
    isMenuVisible: selectedNote !== null,
    openMenu,
    closeMenu,
    deleteSelected,
    handleAction,
    createNote,
  };
}

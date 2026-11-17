import { NOTE_ACTION_ICONS, NOTE_ACTION_IDS } from './actions';
import { colors } from './theme';
import { noteActionSchema, noteSectionSchema } from '../schemas/notes.schema';

export const NOTE_SECTIONS = noteSectionSchema.array().parse([
  {
    title: 'Compartilhadas',
    notes: [
      {
        id: 'shared-shopping',
        title: 'Lista de Compras da...',
        color: colors.note.sharedBlue,
        accent: colors.accent.pink,
        sharedWith: ['L'],
      },
      {
        id: 'shared-vehicles',
        title: 'Valores dos veículos...',
        color: colors.note.sharedPurple,
        accent: colors.accent.magenta,
        sharedWith: ['L'],
      },
      {
        id: 'shared-ideas',
        title: 'Ideias para o fim de...',
        color: colors.note.sharedLight,
        accent: colors.accent.violet,
        sharedWith: ['L'],
      },
    ],
  },
  {
    title: 'Notas pessoais',
    notes: [
      { id: 'personal-shopping', title: 'Lista de Compras da...', color: colors.note.personalYellow },
      { id: 'personal-vehicles', title: 'Valores dos veículos...', color: colors.note.personalGreen },
    ],
  },
  {
    title: 'Rascunhos',
    notes: [
      { id: 'draft-shopping', title: 'Lista de Compras da...', color: colors.note.draftPink },
      { id: 'draft-vehicles', title: 'Valores dos veículos...', color: colors.note.draftRose },
    ],
  },
]);

const NOTE_ACTION_LABELS = ['Editar', 'Compartilhar', 'Add Widget', 'Deletar'] as const;

export const NOTE_ACTIONS = noteActionSchema.array().parse(
  NOTE_ACTION_IDS.map((id, index) => ({
    id,
    label: NOTE_ACTION_LABELS[index],
    icon: NOTE_ACTION_ICONS[index],
  })),
);

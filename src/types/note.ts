import type { NOTE_ACTION_ICONS, NOTE_ACTION_IDS } from '../config/actions';

export type NoteActionId = (typeof NOTE_ACTION_IDS)[number];

export type NoteActionIcon = (typeof NOTE_ACTION_ICONS)[number];

import { z } from 'zod';

import { NOTE_ACTION_ICONS, NOTE_ACTION_IDS } from '../config/actions';

export const hexColorSchema = z.string().regex(/^#[0-9a-fA-F]{6}$/, { error: 'Cor inválida' });

export const noteActionIdSchema = z.enum(NOTE_ACTION_IDS);

export const noteActionIconSchema = z.enum(NOTE_ACTION_ICONS);

export const noteSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  color: hexColorSchema,
  accent: hexColorSchema.optional(),
  sharedWith: z.array(z.string()).optional(),
  createdAt: z.string().optional(),
});

export const noteSectionSchema = z.object({
  title: z.string().min(1),
  notes: z.array(noteSchema),
});

export const noteActionSchema = z.object({
  id: noteActionIdSchema,
  label: z.string().min(1),
  icon: noteActionIconSchema,
});

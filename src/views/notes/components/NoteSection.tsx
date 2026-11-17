import { Pressable, ScrollView, Text, View } from 'react-native';

import { notesStyles } from '../../../styles/NotesStyles';
import type { Note, NoteSection as NoteSectionModel } from '../../../models/note';
import NoteCard from './NoteCard';

type NoteSectionProps = {
  section: NoteSectionModel;
  showDivider: boolean;
  onOpenMenu: (note: Note) => void;
};

export default function NoteSection({
  section,
  showDivider,
  onOpenMenu,
}: NoteSectionProps) {
  return (
    <View style={[notesStyles.section, showDivider && notesStyles.sectionWithDivider]}>
      <View style={notesStyles.sectionHeader}>
        <Text style={notesStyles.sectionTitle}>{section.title}</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Ver todas as ${section.title.toLowerCase()}`}
          hitSlop={8}
        >
          <Text style={notesStyles.seeAll}>Ver tudo</Text>
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={notesStyles.cards}
      >
        {section.notes.map((note) => (
          <NoteCard key={note.id} note={note} onOpenMenu={onOpenMenu} />
        ))}
      </ScrollView>
    </View>
  );
}

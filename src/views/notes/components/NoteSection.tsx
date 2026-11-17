import { Pressable, ScrollView, Text, View } from 'react-native';

import { notesStyles } from '../../../styles/NotesStyles';
import NoteCard from './NoteCard';
import NoteSectionProps from '@/types/notesectionprops';

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

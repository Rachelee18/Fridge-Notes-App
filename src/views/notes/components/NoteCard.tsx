import { Text, View } from 'react-native';

import IconButton from '../../../components/ui/IconButton';
import { colors } from '../../../config/theme';
import { notesStyles } from '../../../styles/NotesStyles';
import type { Note } from '../../../models/note';

type NoteCardProps = {
  note: Note;
  onOpenMenu: (note: Note) => void;
};

export default function NoteCard({ note, onOpenMenu }: NoteCardProps) {
  return (
    <View style={[notesStyles.card, { backgroundColor: note.color }]}>
      <Text numberOfLines={1} style={notesStyles.cardTitle}>
        {note.title}
      </Text>
      <IconButton
        icon="dots-vertical"
        accessibilityLabel={`Opções para ${note.title}`}
        onPress={() => onOpenMenu(note)}
        style={notesStyles.moreButton}
      />
      {note.accent && (
        <View style={notesStyles.sharedAvatars}>
          <View style={[notesStyles.avatar, { backgroundColor: colors.avatar }]} />
          <View
            style={[
              notesStyles.avatar,
              notesStyles.avatarOverlap,
              { backgroundColor: note.accent },
            ]}
          >
            <Text style={notesStyles.avatarText}>L</Text>
          </View>
        </View>
      )}
    </View>
  );
}

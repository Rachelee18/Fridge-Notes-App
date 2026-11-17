import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Modal, Pressable, Text } from 'react-native';

import { colors } from '../../../config/theme';
import { notesStyles } from '../../../styles/NotesStyles';
import type { NoteAction } from '../../../models/note';

type NoteActionsMenuProps = {
  visible: boolean;
  actions: NoteAction[];
  onClose: () => void;
  onSelect: (action: NoteAction) => void;
};

export default function NoteActionsMenu({
  visible,
  actions,
  onClose,
  onSelect,
}: NoteActionsMenuProps) {
  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onClose}>
      <Pressable style={notesStyles.modalBackdrop} onPress={onClose}>
        <Pressable style={notesStyles.actionMenu} onPress={(event) => event.stopPropagation()}>
          {actions.map((action, index) => (
            <Pressable
              key={action.id}
              accessibilityRole="button"
              onPress={() => onSelect(action)}
              style={[notesStyles.action, index > 0 && notesStyles.actionBorder]}
            >
              <MaterialCommunityIcons name={action.icon} size={20} color={colors.actionIcon} />
              <Text style={notesStyles.actionText}>{action.label}</Text>
            </Pressable>
          ))}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

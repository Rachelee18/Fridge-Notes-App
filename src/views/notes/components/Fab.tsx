import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

import { colors } from '../../../config/theme';
import { notesStyles } from '../../../styles/NotesStyles';
import FabProps from '@/types/fabprops';

export default function Fab({ onCreate }: FabProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Criar nota"
      onPress={onCreate}
      style={({ pressed }) => [notesStyles.fab, pressed && notesStyles.pressed]}
    >
      <MaterialCommunityIcons name="plus" size={30} color={colors.white} />
    </Pressable>
  );
}

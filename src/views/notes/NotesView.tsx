import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScreenHeader from '../../components/ScreenHeader';
import { notesStyles as styles } from '../../styles/NotesStyles';
import { useNotesViewModel } from '../../viewmodels/useNotesViewModel';
import { Fab, NoteActionsMenu, NoteSection } from './components';

export default function NotesView() {
  const {
    sections,
    actions,
    isMenuVisible,
    openMenu,
    closeMenu,
    handleAction,
    createNote,
  } = useNotesViewModel();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScreenHeader />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Minhas notas</Text>

          {sections.map((section, index) => (
            <NoteSection
              key={section.title}
              section={section}
              showDivider={index > 0}
              onOpenMenu={openMenu}
            />
          ))}
        </ScrollView>

        <Fab onCreate={createNote} />
      </View>

      <NoteActionsMenu
        visible={isMenuVisible}
        actions={actions}
        onClose={closeMenu}
        onSelect={handleAction}
      />
    </SafeAreaView>
  );
}

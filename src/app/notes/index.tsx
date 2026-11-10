import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../../components/ScreenHeader';

type Note = {
  title: string;
  color: string;
  accent?: string;
};

type NoteSection = {
  title: string;
  notes: Note[];
};

const sections: NoteSection[] = [
  {
    title: 'Compartilhadas',
    notes: [
      { title: 'Lista de Compras da...', color: '#cfe1f7', accent: '#f16ba4' },
      { title: 'Valores dos veículos...', color: '#ddcff7', accent: '#cf68bd' },
      { title: 'Ideias para o fim de...', color: '#d8e8f8', accent: '#8a72d5' },
    ],
  },
  {
    title: 'Notas pessoais',
    notes: [
      { title: 'Lista de Compras da...', color: '#f8edcc' },
      { title: 'Valores dos veículos...', color: '#c9f3dc' },
    ],
  },
  {
    title: 'Rascunhos',
    notes: [
      { title: 'Lista de Compras da...', color: '#f5cad8' },
      { title: 'Valores dos veículos...', color: '#f2c9d7' },
    ],
  },
];

const actions = [
  { label: 'Editar', icon: 'square-edit-outline' as const },
  { label: 'Compartilhar', icon: 'send-outline' as const },
  { label: 'Add Widget', icon: 'widgets-outline' as const },
  { label: 'Deletar', icon: 'trash-can-outline' as const },
];

export default function NotesScreen() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScreenHeader />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>Minhas notas</Text>

          {sections.map((section, index) => (
            <View
              key={section.title}
              style={[styles.section, index > 0 && styles.sectionWithDivider]}
            >
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`Ver todas as ${section.title.toLowerCase()}`}
                  hitSlop={8}
                >
                  <Text style={styles.seeAll}>Ver tudo</Text>
                </Pressable>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.cards}
              >
                {section.notes.map((note) => (
                  <View key={note.title} style={[styles.card, { backgroundColor: note.color }]}>
                    <Text numberOfLines={1} style={styles.cardTitle}>
                      {note.title}
                    </Text>
                    <Pressable
                      accessibilityRole="button"
                      accessibilityLabel={`Opções para ${note.title}`}
                      onPress={() => setSelectedNote(note)}
                      style={styles.moreButton}
                      hitSlop={8}
                    >
                      <MaterialCommunityIcons name="dots-vertical" size={20} color="#0d3d9d" />
                    </Pressable>
                    {note.accent && (
                      <View style={styles.sharedAvatars}>
                        <View style={[styles.avatar, { backgroundColor: '#62b5ea' }]} />
                        <View style={[styles.avatar, styles.avatarOverlap, { backgroundColor: note.accent }]}>
                          <Text style={styles.avatarText}>L</Text>
                        </View>
                      </View>
                    )}
                  </View>
                ))}
              </ScrollView>
            </View>
          ))}
        </ScrollView>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Criar nota"
          style={({ pressed }) => [styles.fab, pressed && styles.pressed]}
        >
          <MaterialCommunityIcons name="plus" size={30} color="#fff" />
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={selectedNote !== null}
        onRequestClose={() => setSelectedNote(null)}
      >
        <Pressable style={styles.modalBackdrop} onPress={() => setSelectedNote(null)}>
          <Pressable style={styles.actionMenu} onPress={(event) => event.stopPropagation()}>
            {actions.map((action, index) => (
              <Pressable
                key={action.label}
                accessibilityRole="button"
                onPress={() => setSelectedNote(null)}
                style={[styles.action, index > 0 && styles.actionBorder]}
              >
                <MaterialCommunityIcons name={action.icon} size={20} color="#315db9" />
                <Text style={styles.actionText}>{action.label}</Text>
              </Pressable>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#8bbcf2' },
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingTop: 20, paddingBottom: 92 },
  heading: {
    color: '#143d9f',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 24,
    marginBottom: 24,
    paddingHorizontal: 18,
  },
  section: { marginBottom: 26 },
  sectionWithDivider: {
    borderTopColor: '#b7d5ff',
    borderTopWidth: 1,
    paddingTop: 18,
  },
  sectionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 18,
  },
  sectionTitle: {
    color: '#143d9f',
    fontFamily: 'Quicksand_700Bold',
    fontSize: 16,
  },
  seeAll: { color: '#143d9f', fontFamily: 'Quicksand_600SemiBold', fontSize: 11 },
  cards: { gap: 16, paddingHorizontal: 18 },
  card: {
    borderRadius: 6,
    height: 122,
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: 10,
    width: 160,
  },
  cardTitle: { color: '#182b55', fontFamily: 'Quicksand_600SemiBold', fontSize: 10, paddingRight: 18 },
  moreButton: { position: 'absolute', right: 7, top: 8 },
  sharedAvatars: { alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' },
  avatar: { borderRadius: 12, height: 24, width: 24 },
  avatarOverlap: { alignItems: 'center', justifyContent: 'center', marginLeft: -7 },
  avatarText: { color: '#fff', fontFamily: 'Quicksand_700Bold', fontSize: 12 },
  fab: {
    alignItems: 'center',
    backgroundColor: '#123f9e',
    borderRadius: 28,
    bottom: 20,
    elevation: 5,
    height: 56,
    justifyContent: 'center',
    position: 'absolute',
    right: 18,
    shadowColor: '#123f9e',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: 56,
  },
  modalBackdrop: {
    alignItems: 'center',
    backgroundColor: 'rgba(90, 151, 226, 0.38)',
    flex: 1,
    justifyContent: 'center',
  },
  actionMenu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 8,
    paddingHorizontal: 13,
    paddingVertical: 5,
    shadowColor: '#17366f',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    width: 183,
  },
  action: { alignItems: 'center', flexDirection: 'row', height: 39, gap: 11 },
  actionBorder: { borderTopColor: '#e1e1e1', borderTopWidth: 1 },
  actionText: { color: '#1e1e1e', fontFamily: 'Quicksand_500Medium', fontSize: 14 },
  pressed: { opacity: 0.7 },
});

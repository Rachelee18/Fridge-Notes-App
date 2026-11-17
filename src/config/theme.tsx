export const colors = {
  primaryBlue: '#8bbcf2',
  white: '#fff',
  navy: '#143d9f',
  description: '#3159af',
  arrowCircle: '#91c3fa',
  button: '#173fa5',
  link: '#5798f4',
  inputText: '#182b55',
  icon: '#7b98ce',
  placeholder: '#b9bec9',
  helper: '#65a3f2',
  fab: '#123f9e',
  actionIcon: '#315db9',
  google: '#4285F4',
  googleButton: '#e1e5ed',
  menuIcon: '#0d3d9d',
  actionText: '#1e1e1e',
  divider: '#b7d5ff',
  actionBorder: '#e1e1e1',
  loginInputBorder: '#568ff1',
  selectBorder: '#d8e2f5',
  avatar: '#62b5ea',
  error: '#c0392b',
  modalBackdrop: 'rgba(90, 151, 226, 0.38)',
  shadow: '#17366f',
  note: {
    sharedBlue: '#cfe1f7',
    sharedPurple: '#ddcff7',
    sharedLight: '#d8e8f8',
    personalYellow: '#f8edcc',
    personalGreen: '#c9f3dc',
    draftPink: '#f5cad8',
    draftRose: '#f2c9d7',
  },
  accent: {
    pink: '#f16ba4',
    magenta: '#cf68bd',
    violet: '#8a72d5',
  },
} as const;

export const fonts = {
  regular: 'Quicksand_400Regular',
  medium: 'Quicksand_500Medium',
  semiBold: 'Quicksand_600SemiBold',
  bold: 'Quicksand_700Bold',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
} as const;

export const radius = {
  sm: 6,
  md: 10,
  lg: 12,
  xl: 22,
  xxl: 24,
  pill: 28,
} as const;

export const shadows = {
  fab: {
    elevation: 5,
    shadowColor: colors.fab,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  menu: {
    elevation: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
} as const;

export const theme = { colors, fonts, spacing, radius, shadows } as const;

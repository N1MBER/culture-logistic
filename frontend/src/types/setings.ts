export const themes = ['Default', 'Dark', 'System'] as const;
export type ThemeName = typeof themes[number];

export type ModalData = {
  key: string | number;
  title?: string;
  hasOverlay?: boolean;
  childern?: React.ReactNode;
};

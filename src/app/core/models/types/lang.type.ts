export const SUPPORTED_LANGS = ['es', 'en'] as const;

export type Lang = (typeof SUPPORTED_LANGS)[number];
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const LOCALES = ['ru', 'en', 'zh', 'ja']
export const DEFAULT_LOCALE = 'ru'
export const LOCALE_NAMES: Record<string, string> = {
  'ru': "Русский",
  'en': "English",
  'zh': "中文",
  'ja': "日本語",
};

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: process.env.NEXT_PUBLIC_LOCALE_DETECTION === 'true',
  localePrefix: 'always',
});

export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);

export type Locale = (typeof routing.locales)[number];
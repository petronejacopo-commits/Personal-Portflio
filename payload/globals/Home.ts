import type { GlobalConfig } from 'payload';

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home',
  admin: {
    group: 'Contenuti',
  },
  fields: [
    {
      name: 'heroTitle',
      type: 'text',
      defaultValue: 'PROCIONE',
      required: true,
    },
    {
      name: 'heroSubtitle',
      type: 'text',
      defaultValue: 'Game Designer & UX/UI Specialist',
      required: true,
    },
    {
      name: 'ctaPrimary',
      type: 'text',
      defaultValue: 'Esplora Progetti',
    },
    {
      name: 'ctaSecondary',
      type: 'text',
      defaultValue: 'Chi Sono',
    },
    {
      name: 'logoAnimation',
      type: 'checkbox',
      label: 'Enable Logo Pulse Animation',
      defaultValue: true,
    }
  ],
};
import type { GlobalConfig } from 'payload';

export const About: GlobalConfig = {
  slug: 'about',
  label: 'Chi Sono',
  admin: {
    group: 'Contenuti',
  },
  fields: [
    {
      name: 'bioParagraphs',
      type: 'array',
      label: 'Biografia (Paragrafi)',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        }
      ]
    },
    {
      name: 'passionText',
      type: 'text',
      label: 'Abilità Speciale',
      defaultValue: 'FORGE VISION — Trasforma la curiosità in sistemi che funzionano davvero',
    }
  ],
};
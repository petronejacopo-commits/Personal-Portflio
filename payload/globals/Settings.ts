import type { GlobalConfig } from 'payload';

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Impostazioni',
  admin: {
    group: 'Impostazioni',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'Procione Portfolio',
    },
    {
      name: 'adminUsername',
      type: 'text',
    },
    {
      name: 'adminPassword',
      type: 'text',
    },
    {
      name: 'palette',
      type: 'group',
      fields: [
        { name: 'primary', type: 'text', defaultValue: '#D4A843' },
        { name: 'secondary', type: 'text', defaultValue: '#B87351' },
        { name: 'dark', type: 'text', defaultValue: '#1A1A1A' }
      ]
    }
  ],
};
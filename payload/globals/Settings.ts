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
        { name: 'primary', type: 'text', defaultValue: '#D9A63E' },
        { name: 'secondary', type: 'text', defaultValue: '#DC4424' },
        { name: 'dark', type: 'text', defaultValue: '#2D1A0A' }
      ]
    }
  ],
};
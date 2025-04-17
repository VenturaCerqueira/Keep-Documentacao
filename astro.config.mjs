// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Documentos - Keep',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/VenturaCerqueira' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ventura-cerqueira/' }
      ],
      sidebar: [
        {
          label: 'Desenvolvimento',
          items: [
            { label: 'Implantação', link: 'desenvolvimento/' }
          ],
        },
        {
          label: 'Suporte',
          items: [
            { label: 'Página Inicial', link: 'suporte/' }, 
            
          ],
        },
        
      ],
    }),
  ],
});
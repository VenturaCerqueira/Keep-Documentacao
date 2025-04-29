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
          label: ' Desenvolvimento',
          items: [
            { label: 'Implantação', link: 'desenvolvimento/' }
          ],
        },
        {
          label: '☑️ Suporte',
          items: [
            { label: '🏠  Página Inicial', link: 'suporte/' }, 
          ],
        },
        {
          label: '☑️ Sistemas',
          items: [
            { label: '🏠  Página Inicial', link: 'sistemas/' },
            {
              label: '📊  Folha de Pagamento',
              collapsed: true,
              items: gerarItensSistema('folha-pagamento'),
            },
            {
              label: '🛅  Portal do Servidor',
              collapsed: true,
              items: gerarItensSistema('portal-servidor')
            },
            {
              label: '✅  e-Social',
              collapsed: true,
              items: gerarItensSistema('esocial')
            },
            {
              label: '⚖️  Tributos',
              collapsed: true,
              items: gerarItensSistema('tributos')
            },
            {
              label: '🛒  Compras Web',
              collapsed: true,
              items: gerarItensSistema('compras-web')
            },
            {
              label: '🏦  Patrimônio',
              collapsed: true,
              items: gerarItensSistema('patrimonio')
            },
            {
              label: '📦  Almoxarifado',
              collapsed: true,
              items: gerarItensSistema('almoxarifado')
            },
            {
              label: '🚗  Frotas',
               collapsed: true,
              items: gerarItensSistema('frotas')
            }
          ],
        },
      ],
    }),
  ],
});

/**
 * @param {string} sistemaSlug 
 * @returns {Array<{label: string, link: string} | {label: string, collapsed: true, items: any[]}>}
 */
function gerarItensSistema(sistemaSlug) {
  if (sistemaSlug === 'tributos') {
    return [
      {
        label: '📚 Documentação',
        collapsed: true,
        items: [
          { label: '📄 Documentação Geral', link: `sistemas/${sistemaSlug}/documentacao` },
          {
            label: '🗃️ Cadastro',
            collapsed: true,
            items: [
              { label: '01 - Cadastro Básico', link: `sistemas/${sistemaSlug}/cadastro/01` },
              { label: '02 - Cadastro Avançado', link: `sistemas/${sistemaSlug}/cadastro/02` },
              { label: '03 - Cadastro Extra', link: `sistemas/${sistemaSlug}/cadastro/03` },
            ]
          },
          { label: '🏘️ Imobiliário', link: `sistemas/${sistemaSlug}/imobiliario` }
        ]
      },
      { label: '📦  Deploy e Versionamento', link: `sistemas/${sistemaSlug}/deploy` },
      { label: '👨🏻‍💻  Solicitações', link: `sistemas/${sistemaSlug}/estrutura` },
      { label: '⚙️  Arquitetura de Sistemas', link: `sistemas/${sistemaSlug}/arquitetura` },
      { label: '🛡️  Controle de Qualidade', link: `sistemas/${sistemaSlug}/Controle` },
      { label: '🔧  Ferramentas e Ambientes', link: `sistemas/${sistemaSlug}/dashboard` },
      { label: '🎲  Mapeamento (BDA)', link: `sistemas/${sistemaSlug}/bancodados` },
      { label: '🔒  Segurança', link: `sistemas/${sistemaSlug}/seguranca` },
      { label: '📋  Procedimentos de Suporte', link: `sistemas/${sistemaSlug}/suporte` },
      { label: '🔄  Atualizações', link: `sistemas/${sistemaSlug}/atualizacoes` },
      { label: '✔️  Validação', link: `sistemas/${sistemaSlug}/validacao` },
      { label: '📅  Versões', link: `sistemas/${sistemaSlug}/versoes` },
      { label: '🌐  Web Service', link: `sistemas/${sistemaSlug}/web-service` }
    ];
  }

  // Padrão para os demais sistemas
  return [
    { label: '📦  Deploy e Versionamento', link: `sistemas/${sistemaSlug}/deploy` },
    { label: '👨🏻‍💻  Solicitações', link: `sistemas/${sistemaSlug}/estrutura` },
    { label: '⚙️  Arquitetura de Sistemas', link: `sistemas/${sistemaSlug}/arquitetura` },
    { label: '🛡️  Controle de Qualidade', link: `sistemas/${sistemaSlug}/Controle` },
    { label: '🔧  Ferramentas e Ambientes', link: `sistemas/${sistemaSlug}/dashboard` },
    { label: '🎲  Mapeamento (BDA)', link: `sistemas/${sistemaSlug}/bancodados` },
    { label: '🔒  Segurança', link: `sistemas/${sistemaSlug}/seguranca` },
    { label: '📋  Procedimentos de Suporte', link: `sistemas/${sistemaSlug}/suporte` },
    { label: '🔄  Atualizações', link: `sistemas/${sistemaSlug}/atualizacoes` },
    { label: '✔️  Validação', link: `sistemas/${sistemaSlug}/validacao` },
    { label: '📅  Versões', link: `sistemas/${sistemaSlug}/versoes` },
    { label: '🌐  Web Service', link: `sistemas/${sistemaSlug}/web-service` }
  ];
}

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
          { label: '📄 Documentação', link: `sistemas/${sistemaSlug}/documentacao` },
          {
            label: '🗃️ Cadastro',
            collapsed: true,
            items: [
              { label: '📊 01 - Índice financeiro', link: `sistemas/${sistemaSlug}/doc_org/cadastro/01-indice_financeiro` },
              { label: '💰 02 - Multa', link: `sistemas/${sistemaSlug}/doc_org/cadastro/02-multa` },
              { label: '📈 03 - Juros', link: `sistemas/${sistemaSlug}/doc_org/cadastro/03-juros` },
              { label: '📒 04 - Conta contábil', link: `sistemas/${sistemaSlug}/doc_org/cadastro/04-conta_contabil` },
              { label: '📑 05 - Receitas', link: `sistemas/${sistemaSlug}/doc_org/cadastro/05-receitas` },
              { label: '📊 06 - Classificação receita', link: `sistemas/${sistemaSlug}/doc_org/cadastro/06-classificacao_receita` },
              { label: '📂 07 - Receita tipo', link: `sistemas/${sistemaSlug}/doc_org/cadastro/07-receita_tipo` },
              { label: '📝 08 - Tipos procedimento', link: `sistemas/${sistemaSlug}/doc_org/cadastro/08-tipos_procedimento` },
              { label: '🏢 09 - CNAE', link: `sistemas/${sistemaSlug}/doc_org/cadastro/09-cnae` },
              { label: '🛠️ 10 - Item serviço', link: `sistemas/${sistemaSlug}/doc_org/cadastro/10-item_servico` },
              { label: '🚗 11 - Veículo marca', link: `sistemas/${sistemaSlug}/doc_org/cadastro/11-veiculo_marca` },
              { label: '🚙 12 - Veículo', link: `sistemas/${sistemaSlug}/doc_org/cadastro/12-veiculo` },
              { label: '🏘️ 13 - Bairro', link: `sistemas/${sistemaSlug}/doc_org/cadastro/13-bairro` },
              { label: '🔄 14 - Tipo movimentação', link: `sistemas/${sistemaSlug}/doc_org/cadastro/14-tipo_movimentacao` },
              { label: '🏦 15 - Banco', link: `sistemas/${sistemaSlug}/doc_org/cadastro/15-banco` },
              { label: '🌆 16 - Cidade', link: `sistemas/${sistemaSlug}/doc_org/cadastro/16-cidade` },
              { label: '🌍 17 - Estado', link: `sistemas/${sistemaSlug}/doc_org/cadastro/17-estado` },
              { label: '🌎 18 - País', link: `sistemas/${sistemaSlug}/doc_org/cadastro/18-pais` },
              { label: '📋 19 - CNAE item serviço', link: `sistemas/${sistemaSlug}/doc_org/cadastro/19-cnae_item_servico` },
              { label: '📏 20 - UFM', link: `sistemas/${sistemaSlug}/doc_org/cadastro/20-ufm` },
              { label: '🏢 21 - Setor', link: `sistemas/${sistemaSlug}/doc_org/cadastro/21-setor` },
              { label: '📜 22 - Órgão emissor', link: `sistemas/${sistemaSlug}/doc_org/cadastro/22-orgao_emissor` },
              { label: '🏘️ 23 - Bairro', link: `sistemas/${sistemaSlug}/doc_org/cadastro/23-bairro` }
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

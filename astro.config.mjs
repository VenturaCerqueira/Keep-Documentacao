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
        {
          label: 'Sistemas',
          items: [
            { label: 'Página Inicial', link: 'sistemas/' },
              {
                label: 'Folha de Pagamento',
                items: [
                  { label: 'Documentação', link: 'sistemas/folha-pagamento/documentacao' },
                  { label: 'Acesso', link: 'sistemas/folha-pagamento/acesso' },
                  { label: 'Configuração', link: 'sistemas/folha-pagamento/configuracao' },
                  { label: 'Manutenção', link: 'sistemas/folha-pagamento/manutencao' },
                  { label: 'Relatórios', link: 'sistemas/folha-pagamento/relatorios' },
                  { label: 'Rotinas', link: 'sistemas/folha-pagamento/rotinas' },
                  { label: 'Segurança', link: 'sistemas/folha-pagamento/seguranca' },
                  { label: 'Suporte', link: 'sistemas/folha-pagamento/suporte' },
                  { label: 'Treinamento', link: 'sistemas/folha-pagamento/treinamento' },
                  { label: 'Atualizações', link: 'sistemas/folha-pagamento/atualizacoes' },
                  { label: 'Validação', link: 'sistemas/folha-pagamento/validacao' },
                  { label: 'Versões', link: 'sistemas/folha-pagamento/versoes' },
                  { label: 'Vídeos', link: 'sistemas/folha-pagamento/videos' },
                  { label: 'Web Service', link: 'sistemas/folha-pagamento/web-service' }
                ],
              },
              {
                label: 'Tributos',
                items: [
                  { label: 'Documentação', link: 'sistemas/folha-pagamento/documentacao' },
                  { label: 'Acesso', link: 'sistemas/folha-pagamento/acesso' },
                  { label: 'Configuração', link: 'sistemas/folha-pagamento/configuracao' },
                  { label: 'Manutenção', link: 'sistemas/folha-pagamento/manutencao' },
                  { label: 'Relatórios', link: 'sistemas/folha-pagamento/relatorios' },
                  { label: 'Rotinas', link: 'sistemas/folha-pagamento/rotinas' },
                  { label: 'Segurança', link: 'sistemas/folha-pagamento/seguranca' },
                  { label: 'Suporte', link: 'sistemas/folha-pagamento/suporte' },
                  { label: 'Treinamento', link: 'sistemas/folha-pagamento/treinamento' },
                  { label: 'Atualizações', link: 'sistemas/folha-pagamento/atualizacoes' },
                  { label: 'Validação', link: 'sistemas/folha-pagamento/validacao' },
                  { label: 'Versões', link: 'sistemas/folha-pagamento/versoes' },
                  { label: 'Vídeos', link: 'sistemas/folha-pagamento/videos' },
                  { label: 'Web Service', link: 'sistemas/folha-pagamento/web-service' }
                ],
              },
              {
                label: 'e-Social',
                items: [
                  { label: 'Documentação', link: 'sistemas/folha-pagamento/documentacao' },
                  { label: 'Acesso', link: 'sistemas/folha-pagamento/acesso' },
                  { label: 'Configuração', link: 'sistemas/folha-pagamento/configuracao' },
                  { label: 'Manutenção', link: 'sistemas/folha-pagamento/manutencao' },
                  { label: 'Relatórios', link: 'sistemas/folha-pagamento/relatorios' },
                  { label: 'Rotinas', link: 'sistemas/folha-pagamento/rotinas' },
                  { label: 'Segurança', link: 'sistemas/folha-pagamento/seguranca' },
                  { label: 'Suporte', link: 'sistemas/folha-pagamento/suporte' },
                  { label: 'Treinamento', link: 'sistemas/folha-pagamento/treinamento' },
                  { label: 'Atualizações', link: 'sistemas/folha-pagamento/atualizacoes' },
                  { label: 'Validação', link: 'sistemas/folha-pagamento/validacao' },
                  { label: 'Versões', link: 'sistemas/folha-pagamento/versoes' },
                  { label: 'Vídeos', link: 'sistemas/folha-pagamento/videos' },
                  { label: 'Web Service', link: 'sistemas/folha-pagamento/web-service' }
                ],
              },
              {
                label: 'Patrimônio',
                items: [
                  { label: 'Documentação', link: 'sistemas/folha-pagamento/documentacao' },
                  { label: 'Acesso', link: 'sistemas/folha-pagamento/acesso' },
                  { label: 'Configuração', link: 'sistemas/folha-pagamento/configuracao' },
                  { label: 'Manutenção', link: 'sistemas/folha-pagamento/manutencao' },
                  { label: 'Relatórios', link: 'sistemas/folha-pagamento/relatorios' },
                  { label: 'Rotinas', link: 'sistemas/folha-pagamento/rotinas' },
                  { label: 'Segurança', link: 'sistemas/folha-pagamento/seguranca' },
                  { label: 'Suporte', link: 'sistemas/folha-pagamento/suporte' },
                  { label: 'Treinamento', link: 'sistemas/folha-pagamento/treinamento' },
                  { label: 'Atualizações', link: 'sistemas/folha-pagamento/atualizacoes' },
                  { label: 'Validação', link: 'sistemas/folha-pagamento/validacao' },
                  { label: 'Versões', link: 'sistemas/folha-pagamento/versoes' },
                  { label: 'Vídeos', link: 'sistemas/folha-pagamento/videos' },
                  { label: 'Web Service', link: 'sistemas/folha-pagamento/web-service' }
                ],
              },
              {
                label: 'Frotas',
                items: [
                  { label: 'Documentação', link: 'sistemas/folha-pagamento/documentacao' },
                  { label: 'Acesso', link: 'sistemas/folha-pagamento/acesso' },
                  { label: 'Configuração', link: 'sistemas/folha-pagamento/configuracao' },
                  { label: 'Manutenção', link: 'sistemas/folha-pagamento/manutencao' },
                  { label: 'Relatórios', link: 'sistemas/folha-pagamento/relatorios' },
                  { label: 'Rotinas', link: 'sistemas/folha-pagamento/rotinas' },
                  { label: 'Segurança', link: 'sistemas/folha-pagamento/seguranca' },
                  { label: 'Suporte', link: 'sistemas/folha-pagamento/suporte' },
                  { label: 'Treinamento', link: 'sistemas/folha-pagamento/treinamento' },
                  { label: 'Atualizações', link: 'sistemas/folha-pagamento/atualizacoes' },
                  { label: 'Validação', link: 'sistemas/folha-pagamento/validacao' },
                  { label: 'Versões', link: 'sistemas/folha-pagamento/versoes' },
                  { label: 'Vídeos', link: 'sistemas/folha-pagamento/videos' },
                  { label: 'Web Service', link: 'sistemas/folha-pagamento/web-service' }
                ],
              },
              {
                label: 'Compras Web',
                items: [
                  { label: 'Documentação', link: 'sistemas/folha-pagamento/documentacao' },
                  { label: 'Acesso', link: 'sistemas/folha-pagamento/acesso' },
                  { label: 'Configuração', link: 'sistemas/folha-pagamento/configuracao' },
                  { label: 'Manutenção', link: 'sistemas/folha-pagamento/manutencao' },
                  { label: 'Relatórios', link: 'sistemas/folha-pagamento/relatorios' },
                  { label: 'Rotinas', link: 'sistemas/folha-pagamento/rotinas' },
                  { label: 'Segurança', link: 'sistemas/folha-pagamento/seguranca' },
                  { label: 'Suporte', link: 'sistemas/folha-pagamento/suporte' },
                  { label: 'Treinamento', link: 'sistemas/folha-pagamento/treinamento' },
                  { label: 'Atualizações', link: 'sistemas/folha-pagamento/atualizacoes' },
                  { label: 'Validação', link: 'sistemas/folha-pagamento/validacao' },
                  { label: 'Versões', link: 'sistemas/folha-pagamento/versoes' },
                  { label: 'Vídeos', link: 'sistemas/folha-pagamento/videos' },
                  { label: 'Web Service', link: 'sistemas/folha-pagamento/web-service' }
                ],
              },
              {
                label: 'Portal do Servidor',
                items: [
                  { label: 'Documentação', link: 'sistemas/folha-pagamento/documentacao' },
                  { label: 'Acesso', link: 'sistemas/folha-pagamento/acesso' },
                  { label: 'Configuração', link: 'sistemas/folha-pagamento/configuracao' },
                  { label: 'Manutenção', link: 'sistemas/folha-pagamento/manutencao' },
                  { label: 'Relatórios', link: 'sistemas/folha-pagamento/relatorios' },
                  { label: 'Rotinas', link: 'sistemas/folha-pagamento/rotinas' },
                  { label: 'Segurança', link: 'sistemas/folha-pagamento/seguranca' },
                  { label: 'Suporte', link: 'sistemas/folha-pagamento/suporte' },
                  { label: 'Treinamento', link: 'sistemas/folha-pagamento/treinamento' },
                  { label: 'Atualizações', link: 'sistemas/folha-pagamento/atualizacoes' },
                  { label: 'Validação', link: 'sistemas/folha-pagamento/validacao' },
                  { label: 'Versões', link: 'sistemas/folha-pagamento/versoes' },
                  { label: 'Vídeos', link: 'sistemas/folha-pagamento/videos' },
                  { label: 'Web Service', link: 'sistemas/folha-pagamento/web-service' }
                ],
              },
          ],
        },
      ],
    }),
  ],
});
---
title: Página de Desenvolvimento
description: Esta é a página inicial da seção de desenvolvimento.
---
# 📦 Estrutura do Banco de Dados `db_gestaotributaria`

O banco de dados do sistema Almoxarifado é projetado para gerenciar eficientemente os dados relacionados ao controle de estoque, fornecedores e movimentações de produtos. Abaixo estão as principais tabelas e suas descrições:

## 🗂️ Tabela: `atividade_secundaria`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:04
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.08

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario_cadastro` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_baixa` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_atividade` | `bigint unsigned` | FK → cnae.id | NO | NULL |  |
| `fk_contribuinte_juridico` | `bigint unsigned` | FK → contribuinte_juridico.id | NO | NULL |  |
| `data_inicial` | `date` |  | YES | NULL |  |
| `data_baixa` | `date` |  | YES | NULL |  |
| `motivo` | `text` |  | YES | NULL |  |
| `data_registro_baixa` | `datetime` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `bairro`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:46
- **Última atualização:** 2025-05-02 13:04:50
- **Número de linhas (estimado):** 19
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_cidade` | `bigint unsigned` | FK → cidade.id | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `banco`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-02 13:06:15
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `codigo` | `varchar(5)` |  | NO | NULL |  |
| `cod_contabil` | `varchar(30)` |  | YES | NULL |  |
| `cod_agencia` | `varchar(20)` |  | YES | NULL |  |
| `cod_conta` | `varchar(20)` |  | YES | NULL |  |
| `numero_convenio` | `int` |  | YES | NULL |  |
| `chave_pix` | `varchar(100)` |  | YES | NULL |  |
| `client_id` | `varchar(255)` |  | YES | NULL |  |
| `client_secret` | `varchar(255)` |  | YES | NULL |  |
| `app_key` | `varchar(255)` |  | YES | NULL |  |
| `cod_banco_siafic` | `varchar(5)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `carta_cobranca`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:17
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_carta_cobranca_modelo` | `bigint unsigned` | FK → carta_cobranca_modelo.id | NO | NULL |  |
| `fk_usuario_cancelamento` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `descricao` | `varchar(50)` |  | NO | NULL |  |
| `data_emissao` | `datetime` |  | NO | NULL |  |
| `data_vencimento_inicial` | `date` |  | NO | NULL |  |
| `data_vencimento_final` | `date` |  | NO | NULL |  |
| `tipo_pessoa` | `tinyint` |  | YES | NULL |  |
| `valor_total_inicial` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_total_final` | `decimal(15,2)` |  | NO | NULL |  |
| `data_vencimento_dam` | `date` |  | YES | NULL |  |
| `data_base_encargos` | `date` |  | YES | NULL |  |
| `envia_email` | `tinyint` |  | NO | 0 |  |
| `envia_whatsapp` | `tinyint` |  | NO | 0 |  |
| `envia_sms` | `tinyint` |  | NO | 0 |  |
| `qtd_cartas` | `int` |  | NO | NULL |  |
| `qtd_guias` | `int` |  | NO | NULL |  |
| `data_cancelamento` | `datetime` |  | YES | NULL |  |
| `situacao` | `int` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `carta_cobranca_classificacao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:18
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_carta_cobranca` | `bigint unsigned` | FK → carta_cobranca.id | NO | NULL |  |
| `fk_receita_classificacao` | `bigint unsigned` | FK → receita_classificacao.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `carta_cobranca_contribuinte`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:18
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_carta_cobranca` | `bigint unsigned` | FK → carta_cobranca.id | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_usuario_cancelamento` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `data_cancelamento` | `datetime` |  | YES | NULL |  |
| `valor_total_cota` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_total_multa` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_total_juros` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_total_correcao` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_total_geral` | `decimal(15,2)` |  | NO | NULL |  |
| `codigo_barras` | `varchar(44)` |  | YES | NULL |  |
| `vencimento_codigo_barras` | `date` |  | YES | NULL |  |
| `valor_pago` | `decimal(15,2)` |  | NO | NULL |  |
| `data_pagamento` | `date` |  | YES | NULL |  |
| `situacao` | `int` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `carta_cobranca_contribuinte_cota`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:18
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_carta_cobranca_contribuinte` | `bigint unsigned` | FK → carta_cobranca_contribuinte.id | NO | NULL |  |
| `fk_lancamento_cota` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `valor_cota` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_multa` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_juros` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_correcao` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_total` | `decimal(15,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `carta_cobranca_modelo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:17
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `descricao` | `varchar(50)` |  | NO | NULL |  |
| `texto` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `carta_fila_envio`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:18
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_carta_cobranca_contribuinte` | `bigint unsigned` | FK → carta_cobranca_contribuinte.id | NO | NULL |  |
| `tipo` | `tinyint` |  | NO | NULL |  |
| `chave` | `varchar(200)` |  | NO | NULL |  |
| `data_envio` | `date` |  | NO | NULL |  |
| `situacao` | `int` |  | NO | 1 |  |
| `mensagem` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `categoria`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:16
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(50)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `cbo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-02 13:05:12
- **Número de linhas (estimado):** 2.400
- **Tamanho aprox. (MB):** 0.20

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `codigo` | `int` |  | NO | NULL |  |
| `descricao` | `varchar(200)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `cidade`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:46
- **Última atualização:** 2025-05-02 13:04:49
- **Número de linhas (estimado):** 5.586
- **Tamanho aprox. (MB):** 0.61

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_estado` | `bigint unsigned` | FK → estado.id | NO | NULL |  |
| `nome` | `varchar(191)` |  | NO | NULL |  |
| `ibge` | `int` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `cip`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:51
- **Última atualização:** 2025-05-02 13:06:01
- **Número de linhas (estimado):** 6
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `faixa_inicial` | `decimal(15,2)` |  | NO | NULL |  |
| `faixa_final` | `decimal(15,2)` |  | NO | NULL |  |
| `valor` | `decimal(15,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `cnae`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:46
- **Última atualização:** 2025-05-02 13:05:25
- **Número de linhas (estimado):** 1.332
- **Tamanho aprox. (MB):** 0.23

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `codigo` | `varchar(14)` |  | NO | NULL |  |
| `descricao` | `text` |  | NO | NULL |  |
| `percentual` | `decimal(15,2)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `cnae_item_servico`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:46
- **Última atualização:** 2025-05-02 13:05:32
- **Número de linhas (estimado):** 847
- **Tamanho aprox. (MB):** 0.17

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_cnae` | `bigint unsigned` | FK → cnae.id | NO | NULL |  |
| `fk_item_servico` | `bigint unsigned` | FK → item_servico.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `conta_contabil`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:54
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 24
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_receita_tipo` | `bigint unsigned` | FK → receita_tipo.id | NO | NULL |  |
| `codigo` | `varchar(50)` |  | NO | NULL |  |
| `descricao` | `varchar(200)` |  | NO | NULL |  |
| `sigla` | `varchar(10)` |  | NO | NULL |  |
| `cod_conta_principal` | `varchar(40)` |  | YES | NULL |  |
| `cod_conta_encargos` | `varchar(40)` |  | YES | NULL |  |
| `cod_conta_da` | `varchar(40)` |  | YES | NULL |  |
| `cod_conta_da_encargos` | `varchar(40)` |  | YES | NULL |  |
| `num_fonte_recurso` | `varchar(20)` |  | YES | NULL |  |
| `cod_orgao` | `varchar(10)` |  | YES | NULL |  |
| `cod_conta_reconhecimento` | `varchar(40)` |  | YES | NULL |  |
| `cod_conta_pagamento` | `varchar(40)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contato`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:58
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `tipo` | `tinyint` |  | NO | NULL |  |
| `contato` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:12
- **Última atualização:** 2025-05-02 13:06:02
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.13

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_pais` | `bigint unsigned` | FK → pais.id | NO | NULL |  |
| `fk_cidade` | `bigint unsigned` | FK → cidade.id | NO | NULL |  |
| `fk_tipo_logradouro` | `bigint unsigned` | FK → tipo_logradouro.id | NO | NULL |  |
| `fk_bairro` | `bigint unsigned` | FK → bairro.id | NO | NULL |  |
| `fk_imovel_caracteristica` | `bigint unsigned` | FK → imovel_caracteristica.id | YES | NULL |  |
| `razao_social` | `varchar(100)` |  | NO | NULL |  |
| `fantasia` | `varchar(100)` |  | YES | NULL |  |
| `cpf_cnpj` | `varchar(14)` |  | NO | NULL |  |
| `email` | `varchar(100)` |  | YES | NULL |  |
| `unidade` | `varchar(20)` |  | YES | NULL |  |
| `contato` | `varchar(20)` |  | YES | NULL |  |
| `contato2` | `varchar(20)` |  | YES | NULL |  |
| `contato_wpp` | `varchar(20)` |  | NO | 0 |  |
| `tipo` | `tinyint` |  | NO | NULL |  |
| `cep` | `varchar(9)` |  | NO | NULL |  |
| `endereco` | `varchar(100)` |  | NO | NULL |  |
| `numero` | `varchar(10)` |  | NO | NULL |  |
| `complemento` | `varchar(200)` |  | YES | NULL |  |
| `site` | `varchar(255)` |  | YES | NULL |  |
| `imagem` | `varchar(191)` |  | YES | NULL |  |
| `situacao` | `tinyint` |  | NO | 1 |  |
| `observacoes` | `text` |  | YES | NULL |  |
| `prefeito_nome` | `varchar(100)` |  | YES | NULL |  |
| `prefeito_ass_digitalizada` | `text` |  | YES | NULL |  |
| `chefe_setor_nome` | `varchar(100)` |  | YES | NULL |  |
| `chefe_setor_cargo` | `varchar(100)` |  | YES | NULL |  |
| `chefe_setor_portaria` | `varchar(30)` |  | YES | NULL |  |
| `chefe_setor_ass_digitalizada` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_anexo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:57
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `anexo` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_baixa`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:14
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte_juridico` | `bigint unsigned` | FK → contribuinte_juridico.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_motivo_baixa` | `bigint unsigned` | FK → motivo_baixa.id | NO | NULL |  |
| `numero` | `int` |  | NO | NULL |  |
| `data_baixa` | `date` |  | NO | NULL |  |
| `chave_validacao` | `varchar(20)` |  | NO | NULL |  |
| `arquivo` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_cnae`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:00
- **Última atualização:** 2025-05-02 13:06:02
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.09

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte_juridico` | `bigint unsigned` | FK → contribuinte_juridico.id | NO | NULL |  |
| `fk_cnae` | `bigint unsigned` | FK → cnae.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_baixa` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `fk_usuario_exclusao` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `data_inicio` | `date` |  | NO | NULL |  |
| `data_baixa` | `date` |  | YES | NULL |  |
| `motivo_baixa` | `text` |  | YES | NULL |  |
| `motivo_exclusao` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |
| `deleted_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_cnd`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:14
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `numero` | `int` |  | NO | NULL |  |
| `data_validade` | `date` |  | NO | NULL |  |
| `chave_validacao` | `varchar(20)` |  | NO | NULL |  |
| `arquivo` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_fisico`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:17
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_categoria` | `bigint unsigned` | FK → categoria.id | YES | NULL |  |
| `fk_localizacao` | `bigint unsigned` | FK → localizacao.id | YES | NULL |  |
| `estrangeiro` | `tinyint` |  | NO | 0 |  |
| `sexo` | `tinyint` |  | YES | NULL |  |
| `rg` | `varchar(20)` |  | YES | NULL |  |
| `rg_orgao_emissor` | `varchar(10)` |  | YES | NULL |  |
| `rg_data_exp` | `date` |  | YES | NULL |  |
| `cnh` | `varchar(15)` |  | YES | NULL |  |
| `cnh_categoria` | `tinyint` |  | YES | NULL |  |
| `cnh_vencimento` | `date` |  | YES | NULL |  |
| `registro_profissional` | `varchar(20)` |  | YES | NULL |  |
| `profissao` | `varchar(50)` |  | YES | NULL |  |
| `box` | `varchar(30)` |  | YES | NULL |  |
| `estado_civil` | `int` |  | YES | NULL |  |
| `data_nascimento` | `date` |  | YES | NULL |  |
| `nome_mae` | `varchar(70)` |  | YES | NULL |  |
| `obito_data` | `date` |  | YES | NULL |  |
| `obito_nome_responsavel` | `varchar(70)` |  | YES | NULL |  |
| `autonomo_informal` | `tinyint` |  | NO | 0 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_historico`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:57
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_usuario_cadastro` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `motivo` | `varchar(100)` |  | NO | NULL |  |
| `historico` | `varchar(200)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_juridico`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:56
- **Última atualização:** 2025-05-02 13:06:02
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.11

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_cnae` | `bigint unsigned` | FK → cnae.id | YES | NULL |  |
| `fk_representante` | `bigint unsigned` | FK → contribuinte_fisico.id | YES | NULL |  |
| `fk_contador` | `bigint unsigned` | FK → contribuinte_fisico.id | YES | NULL |  |
| `fk_natureza_juridica` | `bigint unsigned` | FK → natureza_juridica.id | YES | NULL |  |
| `fk_item_servico` | `bigint unsigned` | FK → item_servico.id | YES | NULL |  |
| `matriz_filial` | `tinyint unsigned` |  | NO | NULL |  |
| `im` | `varchar(20)` |  | YES | NULL |  |
| `ie` | `varchar(20)` |  | YES | NULL |  |
| `aliquota` | `decimal(15,2)` |  | NO | 0.00 |  |
| `regime_especial_tributacao` | `tinyint` |  | YES | NULL |  |
| `incentivo_fiscal` | `tinyint` |  | NO | 0 |  |
| `porte` | `tinyint` |  | NO | 1 |  |
| `isencao` | `tinyint` |  | NO | 0 |  |
| `emite_nota` | `tinyint` |  | NO | 1 |  |
| `calendario_vencimento` | `int` |  | YES | NULL |  |
| `validacao_bloqueio_emissao` | `tinyint unsigned` |  | NO | 0 |  |
| `junta` | `varchar(30)` |  | YES | NULL |  |
| `simples_nacional` | `tinyint` |  | NO | 1 |  |
| `simples_nacional_data` | `date` |  | YES | NULL |  |
| `imunidade` | `tinyint` |  | YES | NULL |  |
| `fundamento` | `varchar(100)` |  | YES | NULL |  |
| `situacao_atividade` | `int` |  | NO | 1 |  |
| `data_inicio_atividade` | `date` |  | YES | NULL |  |
| `data_atualizacao_atividade` | `datetime` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_movimentacao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:08
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_tipo_movimentacao` | `bigint unsigned` | FK → tipo_movimentacao.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `data` | `date` |  | NO | NULL |  |
| `numero_processo` | `varchar(50)` |  | YES | NULL |  |
| `numero_protocolo` | `varchar(100)` |  | YES | NULL |  |
| `unidade_destino` | `varchar(100)` |  | YES | NULL |  |
| `situacao` | `tinyint` |  | NO | NULL |  |
| `situacao_antigo` | `varchar(50)` |  | YES | NULL |  |
| `anexo` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_receita`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:58
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.16

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_receita` | `bigint unsigned` | FK → receita.id | NO | NULL |  |
| `fk_variacao_valor` | `bigint unsigned` | FK → variacao_valor.id | YES | NULL |  |
| `fk_veiculo` | `bigint unsigned` | FK → veiculo.id | YES | NULL |  |
| `fk_imovel` | `bigint unsigned` | FK → imovel.id | YES | NULL |  |
| `fk_cbo` | `bigint unsigned` | FK → cbo.id | YES | NULL |  |
| `fk_tipo_alvara` | `bigint unsigned` | FK → tipo_alvara.id | YES | NULL |  |
| `fk_usuario_cadastro` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_baixa` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `im` | `varchar(30)` |  | NO | NULL |  |
| `valor_multi` | `decimal(15,2)` |  | NO | 0.00 |  |
| `data_inicial` | `date` |  | NO | NULL |  |
| `data_limite` | `date` |  | YES | NULL |  |
| `data_baixa` | `date` |  | YES | NULL |  |
| `data_registro_baixa` | `datetime` |  | YES | NULL |  |
| `vigencia` | `tinyint` |  | YES | NULL |  |
| `tipo_contrato` | `tinyint` |  | YES | NULL |  |
| `alvara` | `varchar(20)` |  | YES | NULL |  |
| `fator` | `decimal(15,2)` |  | NO | 0.00 |  |
| `horario_funcionamento` | `varchar(100)` |  | YES | NULL |  |
| `horario_especial` | `varchar(100)` |  | YES | NULL |  |
| `observacao` | `text` |  | YES | NULL |  |
| `motivo` | `varchar(100)` |  | YES | NULL |  |
| `status` | `tinyint` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `contribuinte_socio`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:56
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.09

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_socio` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_contribuinte_juridico` | `bigint unsigned` | FK → contribuinte_juridico.id | NO | NULL |  |
| `fk_usuario_cadastro` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_baixa` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `fk_usuario_exclusao` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `cargo` | `varchar(100)` |  | NO | NULL |  |
| `data_inicio` | `date` |  | YES | NULL |  |
| `data_baixa` | `date` |  | YES | NULL |  |
| `motivo_baixa` | `text` |  | YES | NULL |  |
| `motivo_exclusao` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |
| `deleted_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `credenciamento`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:58
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `observacao` | `text` |  | NO | NULL |  |
| `status` | `tinyint unsigned` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `credenciamento_anexo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:59
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_credenciamento` | `bigint unsigned` | FK → credenciamento.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `anexo` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `credito`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:50
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `valor` | `decimal(15,2)` |  | NO | NULL |  |
| `data_compensacao` | `datetime` |  | YES | NULL |  |
| `valor_compensacao` | `decimal(12,2)` |  | YES | NULL |  |
| `motivo` | `varchar(200)` |  | NO | NULL |  |
| `status` | `tinyint` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `daf607`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:11
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `data_processamento` | `datetime` |  | NO | NULL |  |
| `data_geracao` | `date` |  | NO | NULL |  |
| `data_credito` | `date` |  | NO | NULL |  |
| `num_remessa` | `varchar(6)` |  | NO | NULL |  |
| `nome_arquivo` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `daf607_item`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:11
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_daf607` | `bigint unsigned` | FK → daf607.id | NO | NULL |  |
| `fk_lancamento` | `bigint unsigned` | FK → lancamento.id | YES | NULL |  |
| `data_arrecadacao` | `date` |  | NO | NULL |  |
| `data_vencimento` | `date` |  | NO | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `cnpj` | `varchar(191)` |  | NO | NULL |  |
| `valor_principal` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_multa` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_juros` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_autenticacao` | `decimal(15,2)` |  | NO | NULL |  |
| `num_autenticacao` | `varchar(23)` |  | NO | NULL |  |
| `mensagem_ocorrencia` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `declaracao_nao_inscrito`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:18
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `cpf_cnpj` | `varchar(14)` |  | NO | NULL |  |
| `data_emissao` | `datetime` |  | NO | NULL |  |
| `data_validade` | `date` |  | NO | NULL |  |
| `chave_validacao` | `varchar(20)` |  | NO | NULL |  |
| `arquivo` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `divida_ativa`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:09
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_lancamento_cota` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `fk_lancamento_cota_da` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `fk_processamento_da` | `bigint unsigned` | FK → processamento_da.id | NO | NULL |  |
| `pagina_livro` | `int` |  | NO | NULL |  |
| `cpf_cnpj` | `varchar(14)` |  | YES | NULL |  |
| `endereco` | `varchar(255)` |  | NO | NULL |  |
| `bairro` | `varchar(100)` |  | NO | NULL |  |
| `complemento` | `varchar(200)` |  | YES | NULL |  |
| `cidade` | `varchar(100)` |  | NO | NULL |  |
| `uf` | `varchar(2)` |  | NO | NULL |  |
| `numero` | `varchar(10)` |  | NO | NULL |  |
| `emissao` | `datetime` |  | NO | NULL |  |
| `vencimento` | `date` |  | NO | NULL |  |
| `natureza` | `varchar(15)` |  | NO | NULL |  |
| `inscricao` | `varchar(30)` |  | YES | NULL |  |
| `tipo_receita` | `tinyint` |  | NO | NULL |  |
| `valor_divida` | `decimal(15,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `entidades`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:16
- **Última atualização:** 2025-05-16 13:14:10
- **Número de linhas (estimado):** 7
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `slug` | `varchar(100)` |  | NO | NULL |  |
| `database` | `varchar(100)` |  | NO | NULL |  |
| `username` | `varchar(100)` |  | NO | NULL |  |
| `host` | `varchar(255)` |  | YES | NULL |  |
| `port` | `varchar(10)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `estado`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:46
- **Última atualização:** 2025-05-02 13:03:21
- **Número de linhas (estimado):** 27
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `uf` | `varchar(2)` |  | NO | NULL |  |
| `nome` | `varchar(191)` |  | NO | NULL |  |
| `ibge` | `int` |  | NO | NULL |  |
| `aliq_icms_interna` | `decimal(12,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `extrato_dam`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:09
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_cancelamento` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `numero` | `bigint` |  | NO | NULL |  |
| `data` | `datetime` |  | NO | NULL |  |
| `data_vencimento` | `date` |  | NO | NULL |  |
| `valor_principal` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_desconto` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_multa` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_juros` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_correcao` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_total` | `decimal(15,2)` |  | NO | NULL |  |
| `codigo_barras` | `varchar(44)` |  | NO | NULL |  |
| `data_cancelamento` | `datetime` |  | YES | NULL |  |
| `situacao` | `tinyint` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `failed_jobs`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:48
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `connection` | `text` |  | NO | NULL |  |
| `queue` | `text` |  | NO | NULL |  |
| `payload` | `longtext` |  | NO | NULL |  |
| `exception` | `longtext` |  | NO | NULL |  |
| `failed_at` | `timestamp` |  | NO | CURRENT_TIMESTAMP |  |

---

## 🗂️ Tabela: `funcao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:48
- **Última atualização:** 2025-05-02 13:06:07
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `sistema` | `tinyint` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `funcao_permissao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-02 13:06:12
- **Número de linhas (estimado):** 433
- **Tamanho aprox. (MB):** 0.08

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_funcao` | `bigint unsigned` | FK → funcao.id | NO | NULL |  |
| `fk_permissao` | `bigint unsigned` | FK → permissao.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `funcao_usuario`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:48
- **Última atualização:** 2025-05-02 13:06:12
- **Número de linhas (estimado):** 3
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_funcao` | `bigint unsigned` | FK → funcao.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `imovel`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:52
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.11

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_bairro` | `bigint unsigned` | FK → bairro.id | NO | NULL |  |
| `fk_logradouro` | `bigint unsigned` | FK → logradouro.id | NO | NULL |  |
| `fk_loteamento` | `bigint unsigned` | FK → loteamento.id | YES | NULL |  |
| `fk_iptu_aliquota_terr` | `bigint unsigned` | FK → iptu_aliquota.id | NO | NULL |  |
| `fk_iptu_aliquota_edif` | `bigint unsigned` | FK → iptu_aliquota.id | NO | NULL |  |
| `inscricao` | `varchar(20)` |  | NO | NULL |  |
| `inscricao_anterior` | `varchar(20)` |  | YES | NULL |  |
| `numero_metrico` | `int` |  | NO | NULL |  |
| `numero_porta` | `varchar(10)` |  | YES | NULL |  |
| `letra` | `varchar(2)` |  | YES | NULL |  |
| `cep` | `varchar(8)` |  | NO | NULL |  |
| `complemento` | `varchar(100)` |  | YES | NULL |  |
| `quadra` | `varchar(3)` |  | NO | NULL |  |
| `lote` | `varchar(4)` |  | NO | NULL |  |
| `coelba` | `varchar(40)` |  | YES | NULL |  |
| `hidrometro` | `varchar(40)` |  | YES | NULL |  |
| `patrimonio` | `int` |  | NO | NULL |  |
| `coleta_lixo` | `tinyint` |  | NO | NULL |  |
| `telefone` | `tinyint` |  | NO | NULL |  |
| `pav_calcada` | `tinyint` |  | NO | NULL |  |
| `agua` | `tinyint` |  | NO | NULL |  |
| `luz` | `tinyint` |  | NO | NULL |  |
| `situacao_iptu` | `tinyint` |  | NO | NULL |  |
| `testada` | `decimal(15,2)` |  | NO | NULL |  |
| `profundidade` | `decimal(15,2)` |  | NO | NULL |  |
| `area_lote` | `decimal(15,2)` |  | NO | NULL |  |
| `area_construcao` | `decimal(15,2)` |  | NO | 0.00 |  |
| `area_total` | `decimal(15,2)` |  | NO | NULL |  |
| `num_pavimentos` | `int` |  | NO | NULL |  |
| `num_unidade` | `int` |  | NO | NULL |  |
| `fracao_ideal` | `decimal(15,2)` |  | NO | NULL |  |
| `ano_habitese` | `int` |  | YES | NULL |  |
| `valor_venal_terr` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_venal_edif` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_venal_imovel` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_iptu_terr` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_iptu_edif` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_iptu_imovel` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_declarado` | `tinyint` |  | NO | NULL |  |
| `observacao` | `text` |  | YES | NULL |  |
| `data_cadastro` | `date` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `imovel_anexo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:53
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_imovel` | `bigint unsigned` | FK → imovel.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `data` | `datetime` |  | NO | NULL |  |
| `descricao` | `varchar(50)` |  | NO | NULL |  |
| `anexo` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `imovel_caracteristica`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:52
- **Última atualização:** 2025-05-02 13:06:01
- **Número de linhas (estimado):** 12
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_imovel_informacao` | `bigint unsigned` | FK → imovel_informacao.id | NO | NULL |  |
| `codigo` | `varchar(5)` |  | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `imovel_caracteristica_item`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:53
- **Última atualização:** 2025-05-02 13:06:02
- **Número de linhas (estimado):** 47
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_imovel_caracteristica` | `bigint unsigned` | FK → imovel_caracteristica.id | NO | NULL |  |
| `codigo` | `int` |  | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `fator` | `decimal(15,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `imovel_caracteristica_item_imovel`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:53
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_imovel` | `bigint unsigned` | FK → imovel.id | NO | NULL |  |
| `fk_imovel_caracteristica_item` | `bigint unsigned` | FK → imovel_caracteristica_item.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `imovel_informacao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:52
- **Última atualização:** 2025-05-02 13:06:01
- **Número de linhas (estimado):** 3
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `indice_financeiro`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-02 13:05:32
- **Número de linhas (estimado):** 7
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `indice_financeiro_correcao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-02 13:06:00
- **Número de linhas (estimado):** 3.513
- **Tamanho aprox. (MB):** 0.31

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_indice` | `bigint unsigned` | FK → indice_financeiro.id | NO | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `percentual` | `decimal(15,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `iptu_aliquota`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:51
- **Última atualização:** 2025-05-02 13:06:01
- **Número de linhas (estimado):** 4
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `nome` | `varchar(50)` |  | NO | NULL |  |
| `pr_aliquota` | `decimal(5,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `irrf`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:50
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 5
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `faixa_inicial` | `decimal(12,2)` |  | NO | NULL |  |
| `faixa_final` | `decimal(12,2)` |  | NO | NULL |  |
| `deducao` | `decimal(12,2)` |  | YES | NULL |  |
| `aliquota` | `decimal(12,2)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `item_servico`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:46
- **Última atualização:** 2025-05-02 13:05:14
- **Número de linhas (estimado):** 207
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `codigo` | `varchar(10)` |  | NO | NULL |  |
| `descricao` | `text` |  | NO | NULL |  |
| `aliquota` | `decimal(12,2)` |  | NO | 0.00 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `juros`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:50
- **Última atualização:** 2025-05-02 13:05:32
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(30)` |  | NO | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `percentual` | `decimal(15,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:11
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.16

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_cbo` | `bigint unsigned` | FK → cbo.id | YES | NULL |  |
| `fk_processamento` | `bigint unsigned` | FK → processamento.id | YES | NULL |  |
| `fk_veiculo` | `bigint unsigned` | FK → veiculo.id | YES | NULL |  |
| `fk_cnae_principal` | `bigint unsigned` | FK → cnae.id | YES | NULL |  |
| `fk_receita` | `bigint unsigned` | FK → receita.id | NO | NULL |  |
| `fk_conta_contabil` | `bigint unsigned` | FK → conta_contabil.id | NO | NULL |  |
| `fk_parcelamento_debito` | `bigint unsigned` | FK → parcelamento_debito.id | YES | NULL |  |
| `fk_notas` | `text` |  | YES | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `emissao` | `datetime` |  | NO | NULL |  |
| `inscricao` | `varchar(30)` |  | YES | NULL |  |
| `qtd_parcelas` | `int` |  | NO | 0 |  |
| `semana` | `int` |  | YES | NULL |  |
| `sigla` | `varchar(10)` |  | YES | NULL |  |
| `fator` | `decimal(15,2)` |  | NO | 0.00 |  |
| `numero_registro` | `varchar(20)` |  | YES | NULL |  |
| `alvara` | `varchar(20)` |  | YES | NULL |  |
| `origem_lancamento` | `tinyint` |  | NO | NULL |  |
| `periodo` | `tinyint` |  | NO | NULL |  |
| `base_calculo` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_credito` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_ufm` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_principal` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_receita` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_cip` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_trsd` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_desconto_trsd` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_multi` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_outros` | `decimal(15,2)` |  | NO | 0.00 |  |
| `divida_ativa` | `tinyint` |  | NO | 0 |  |
| `descricao` | `varchar(255)` |  | NO | NULL |  |
| `historico` | `varchar(255)` |  | YES | NULL |  |
| `observacao` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento_alvara`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:14
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.08

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_lancamento` | `bigint unsigned` | FK → lancamento.id | YES | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | YES | NULL |  |
| `fk_tipo_alvara` | `bigint unsigned` | FK → tipo_alvara.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `numero` | `int` |  | NO | NULL |  |
| `data_validade` | `date` |  | NO | NULL |  |
| `horario_funcionamento` | `varchar(100)` |  | YES | NULL |  |
| `horario_especial` | `varchar(100)` |  | YES | NULL |  |
| `chave_validacao` | `varchar(10)` |  | NO | NULL |  |
| `arquivo` | `text` |  | NO | NULL |  |
| `observacao` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento_baixa`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-12 16:46:17
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.09

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_lancamento_cota` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `fk_banco` | `bigint unsigned` | FK → banco.id | YES | NULL |  |
| `fk_modalidade` | `bigint unsigned` | FK → modalidade.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_situacao` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `valor_pagamento` | `decimal(15,2)` |  | NO | NULL |  |
| `data_lancamento` | `datetime` |  | NO | NULL |  |
| `data_credito` | `date` |  | YES | NULL |  |
| `data_extincao` | `date` |  | YES | NULL |  |
| `data_situacao` | `datetime` |  | YES | NULL |  |
| `valor_tarifa` | `decimal(15,2)` |  | YES | NULL |  |
| `motivo` | `varchar(255)` |  | YES | NULL |  |
| `agencia_arrecadadora` | `varchar(8)` |  | YES | NULL |  |
| `canal_recebimento` | `varchar(1)` |  | YES | NULL |  |
| `numero_autenticacao` | `varchar(30)` |  | YES | NULL |  |
| `codigo_barras` | `varchar(44)` |  | NO | NULL |  |
| `historico` | `varchar(255)` |  | YES | NULL |  |
| `situacao` | `char(1)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento_codigo_barras`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:09
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_lancamento_cota` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `data_geracao` | `datetime` |  | NO | NULL |  |
| `codigo_barras` | `varchar(44)` |  | NO | NULL |  |
| `data_vencimento` | `date` |  | NO | NULL |  |
| `valor_desconto` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_juros` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_multa` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_correcao` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_outros` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_total` | `decimal(15,2)` |  | NO | 0.00 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento_codigo_barras_pix`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:12
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_lancamento_codigo_barras` | `bigint unsigned` | FK → lancamento_codigo_barras.id | NO | NULL |  |
| `data` | `datetime` |  | NO | NULL |  |
| `versao` | `varchar(10)` |  | NO | NULL |  |
| `txid` | `varchar(200)` |  | NO | NULL |  |
| `link_qrcode` | `text` |  | NO | NULL |  |
| `qrcode` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento_cota`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:03
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_lancamento` | `bigint unsigned` | FK → lancamento.id | NO | NULL |  |
| `fk_situacao` | `bigint unsigned` | FK → situacao.id | NO | NULL |  |
| `fk_usuario_cancelamento` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `numero` | `bigint` |  | NO | NULL |  |
| `data_vencimento_original` | `date` |  | NO | NULL |  |
| `data_vencimento` | `date` |  | NO | NULL |  |
| `data_credito` | `date` |  | YES | NULL |  |
| `parcela` | `int` |  | NO | NULL |  |
| `valor_cota` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_desconto` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_juros` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_multa` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_correcao` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_total` | `decimal(15,2)` |  | NO | 0.00 |  |
| `motivo_cancelamento` | `varchar(200)` |  | YES | NULL |  |
| `codigo_barras` | `varchar(44)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento_extrato_dam`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:09
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_extrato_dam` | `bigint unsigned` | FK → extrato_dam.id | NO | NULL |  |
| `fk_lancamento_cota` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento_ret_banco`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:07
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `codigo_remessa` | `varchar(1)` |  | NO | NULL |  |
| `codigo_convenio` | `varchar(20)` |  | NO | NULL |  |
| `codigo_banco` | `varchar(3)` |  | NO | NULL |  |
| `data_geracao` | `date` |  | NO | NULL |  |
| `nsa` | `varchar(6)` |  | NO | NULL |  |
| `layout` | `varchar(2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento_ret_banco_cota`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:08
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_retorno` | `bigint unsigned` | FK → lancamento_ret_banco.id | NO | NULL |  |
| `id_agencia` | `varchar(20)` |  | NO | NULL |  |
| `data_pagamento` | `date` |  | NO | NULL |  |
| `data_credito` | `date` |  | NO | NULL |  |
| `codigo_barras` | `varchar(44)` |  | NO | NULL |  |
| `valor_recebido` | `decimal(12,2)` |  | NO | NULL |  |
| `valor_tarifa` | `decimal(12,2)` |  | NO | NULL |  |
| `nsr` | `varchar(8)` |  | NO | NULL |  |
| `agencia_arrecadadora` | `varchar(8)` |  | NO | NULL |  |
| `forma_arrecadacao` | `varchar(1)` |  | NO | NULL |  |
| `numero_autenticacao` | `varchar(23)` |  | NO | NULL |  |
| `forma_pagamento` | `varchar(1)` |  | NO | NULL |  |
| `obs` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `lancamento_suspensao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:05
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_lancamento_cota` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_situacao` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `data_lancamento` | `datetime` |  | NO | NULL |  |
| `motivo` | `tinyint` |  | NO | NULL |  |
| `situacao` | `tinyint` |  | NO | NULL |  |
| `data_previsao` | `date` |  | NO | NULL |  |
| `historico` | `text` |  | YES | NULL |  |
| `data_situacao` | `datetime` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `localizacao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:17
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_logradouro` | `bigint unsigned` | FK → logradouro.id | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `numero` | `varchar(20)` |  | YES | NULL |  |
| `complemento` | `varchar(100)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `logradouro`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:51
- **Última atualização:** 2025-05-02 13:06:01
- **Número de linhas (estimado):** 4
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_tipo_logradouro` | `bigint unsigned` | FK → tipo_logradouro.id | NO | NULL |  |
| `fk_bairro` | `bigint unsigned` | FK → bairro.id | NO | NULL |  |
| `codigo` | `int` |  | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `distrito` | `varchar(2)` |  | NO | NULL |  |
| `setor` | `varchar(2)` |  | NO | NULL |  |
| `quadra` | `varchar(3)` |  | NO | NULL |  |
| `pluviais` | `tinyint` |  | NO | NULL |  |
| `sarjetas` | `tinyint` |  | NO | NULL |  |
| `coleta_lixo` | `tinyint` |  | NO | NULL |  |
| `limpeza_publica` | `tinyint` |  | NO | NULL |  |
| `iluminacao_publica` | `tinyint` |  | NO | NULL |  |
| `rede_esgoto` | `tinyint` |  | NO | NULL |  |
| `pavimentacao` | `tinyint` |  | NO | NULL |  |
| `valor_metro` | `decimal(15,2)` |  | NO | NULL |  |
| `cep` | `varchar(8)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `logradouro_cip`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:51
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_logradouro` | `bigint unsigned` | FK → logradouro.id | NO | NULL |  |
| `fk_cip` | `bigint unsigned` | FK → cip.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `logs_requests`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `model` | `varchar(100)` |  | NO | NULL |  |
| `acao` | `varchar(191)` |  | NO | NULL |  |
| `evento` | `varchar(100)` |  | YES | NULL |  |
| `de` | `longtext` |  | YES | NULL |  |
| `para` | `longtext` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `logs_visitas`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-12 16:45:17
- **Número de linhas (estimado):** 3
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `ip` | `varchar(191)` |  | NO | NULL |  |
| `os` | `varchar(191)` |  | NO | NULL |  |
| `browser` | `varchar(191)` |  | NO | NULL |  |
| `version` | `varchar(191)` |  | NO | NULL |  |
| `user_agent` | `varchar(191)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `loteamento`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:51
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte_proprietario` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_contribuinte_empreendedor` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_bairro` | `bigint unsigned` | FK → bairro.id | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `data_inicio` | `date` |  | NO | NULL |  |
| `data_termino` | `date` |  | NO | NULL |  |
| `qtd_lotes` | `int` |  | NO | NULL |  |
| `area_total` | `decimal(15,2)` |  | NO | NULL |  |
| `area_loteada` | `decimal(15,2)` |  | NO | NULL |  |
| `observacao` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `loteamento_anexo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:51
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_loteamento` | `bigint unsigned` | FK → loteamento.id | NO | NULL |  |
| `descricao` | `varchar(50)` |  | NO | NULL |  |
| `anexo` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `menu_lateral`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:48
- **Última atualização:** 2025-05-02 13:06:03
- **Número de linhas (estimado):** 76
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_menu_lateral` | `bigint unsigned` | FK → menu_lateral.id | YES | NULL |  |
| `ordem` | `tinyint` |  | NO | 1 |  |
| `titulo` | `varchar(100)` |  | YES | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `slug` | `varchar(100)` |  | NO | NULL |  |
| `icone` | `varchar(30)` |  | NO | NULL |  |
| `tipo` | `tinyint` |  | NO | NULL |  |
| `link` | `varchar(100)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `migrations`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:45
- **Última atualização:** 2025-05-02 13:03:18
- **Número de linhas (estimado):** 134
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `int unsigned` | PK | NO | NULL |  |
| `migration` | `varchar(191)` |  | NO | NULL |  |
| `batch` | `int` |  | NO | NULL |  |

---

## 🗂️ Tabela: `modalidade`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-02 13:06:15
- **Número de linhas (estimado):** 11
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `codigo` | `int` |  | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `base_legal` | `varchar(50)` |  | YES | NULL |  |
| `pagamento` | `tinyint` |  | NO | 0 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `modelo_dam`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:13
- **Última atualização:** 2025-05-02 13:06:15
- **Número de linhas (estimado):** 4
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(50)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `motivo_baixa`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:14
- **Última atualização:** 2025-05-02 13:06:01
- **Número de linhas (estimado):** 7
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `movimentacao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:04
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.09

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_protocolo` | `bigint unsigned` | FK → protocolo.id | NO | NULL |  |
| `fk_usuario_origem` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_setor_origem` | `bigint unsigned` | FK → setor.id | NO | NULL |  |
| `fk_usuario_destino` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_setor_destino` | `bigint unsigned` | FK → setor.id | NO | NULL |  |
| `data` | `datetime` |  | NO | NULL |  |
| `assunto` | `text` |  | NO | NULL |  |
| `status` | `tinyint` |  | NO | 1 |  |
| `status_ido` | `tinyint` |  | YES | 1 |  |
| `parecer` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `multa`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:50
- **Última atualização:** 2025-05-02 13:05:32
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(30)` |  | NO | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `multa_prazo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:50
- **Última atualização:** 2025-05-02 13:05:32
- **Número de linhas (estimado):** 4
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_multa` | `bigint unsigned` |  | NO | NULL |  |
| `prazo_inicial` | `int` |  | NO | NULL |  |
| `prazo_final` | `int` |  | NO | NULL |  |
| `percentual` | `decimal(15,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `natureza_juridica`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:50
- **Última atualização:** 2025-05-02 13:05:12
- **Número de linhas (estimado):** 66
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `codigo` | `varchar(50)` |  | NO | NULL |  |
| `descricao` | `varchar(200)` |  | NO | NULL |  |
| `status` | `tinyint` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `nota`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:07
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.17

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_nota_contribuinte` | `bigint unsigned` | FK → nota_contribuinte.id | NO | NULL |  |
| `fk_nota_tomador` | `bigint unsigned` | FK → nota_tomador.id | NO | NULL |  |
| `fk_cidade` | `bigint unsigned` | FK → cidade.id | NO | NULL |  |
| `fk_cidade_gerador` | `bigint unsigned` | FK → cidade.id | NO | NULL |  |
| `fk_cidade_incidencia` | `bigint unsigned` | FK → cidade.id | NO | NULL |  |
| `fk_cnae` | `bigint unsigned` | FK → cnae.id | NO | NULL |  |
| `fk_item_servico` | `bigint unsigned` | FK → item_servico.id | NO | NULL |  |
| `fk_nota_substituida` | `bigint unsigned` | FK → nota.id | YES | NULL |  |
| `fk_usuario_cancelamento` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `fk_cidade_intermediario` | `bigint unsigned` | FK → cidade.id | YES | NULL |  |
| `numero` | `bigint` |  | NO | NULL |  |
| `tipo` | `tinyint` |  | NO | NULL |  |
| `emissao` | `datetime` |  | NO | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `status` | `tinyint` |  | NO | 1 |  |
| `codigo_verificacao` | `varchar(9)` |  | YES | NULL |  |
| `valor_servico` | `decimal(12,2)` |  | NO | 0.00 |  |
| `valor_liquido` | `decimal(12,2)` |  | NO | 0.00 |  |
| `base_calculo` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_credito` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_deducoes` | `decimal(12,2)` |  | NO | 0.00 |  |
| `valor_pis` | `decimal(12,2)` |  | NO | 0.00 |  |
| `valor_cofins` | `decimal(12,2)` |  | NO | 0.00 |  |
| `valor_inss` | `decimal(12,2)` |  | NO | 0.00 |  |
| `valor_irrf` | `decimal(12,2)` |  | NO | 0.00 |  |
| `valor_csll` | `decimal(12,2)` |  | NO | 0.00 |  |
| `outras_retencoes` | `decimal(12,2)` |  | NO | 0.00 |  |
| `valor_iss` | `decimal(12,2)` |  | NO | 0.00 |  |
| `aliquota` | `decimal(12,2)` |  | NO | 0.00 |  |
| `desconto_incondicionado` | `decimal(12,2)` |  | NO | 0.00 |  |
| `desconto_condicionado` | `decimal(12,2)` |  | NO | 0.00 |  |
| `iss_retido` | `tinyint` |  | NO | NULL |  |
| `responsavel_retencao` | `tinyint` |  | YES | NULL |  |
| `rps_tipo` | `tinyint` |  | YES | NULL |  |
| `rps_numero` | `varchar(45)` |  | YES | NULL |  |
| `rps_serie` | `varchar(45)` |  | YES | NULL |  |
| `rps_emissao` | `datetime` |  | YES | NULL |  |
| `rps_status` | `tinyint` |  | YES | NULL |  |
| `rps_substituido_tipo` | `tinyint` |  | YES | NULL |  |
| `rps_substituido_numero` | `varchar(191)` |  | YES | NULL |  |
| `rps_substituido_serie` | `varchar(191)` |  | YES | NULL |  |
| `info` | `text` |  | YES | NULL |  |
| `codigo_tributacao_municipio` | `varchar(45)` |  | YES | NULL |  |
| `discriminacao_servicos` | `text` |  | YES | NULL |  |
| `exigibilidade_iss` | `tinyint` |  | NO | NULL |  |
| `numero_processo` | `varchar(20)` |  | YES | NULL |  |
| `cpf_cnpj_intermediario` | `varchar(18)` |  | YES | NULL |  |
| `razao_social_intermediario` | `varchar(100)` |  | YES | NULL |  |
| `codigo_obra` | `varchar(30)` |  | YES | NULL |  |
| `numero_artigo` | `varchar(30)` |  | YES | NULL |  |
| `evento_identificacao` | `varchar(30)` |  | YES | NULL |  |
| `evento_descricao` | `varchar(255)` |  | YES | NULL |  |
| `evento_info_complementar` | `text` |  | YES | NULL |  |
| `data_cancelamento` | `datetime` |  | YES | NULL |  |
| `motivo_cancelamento` | `varchar(255)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `nota_avulsa`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:12
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.13

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_tomador` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_prestador` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_lancamento_iss` | `bigint unsigned` | FK → lancamento.id | NO | NULL |  |
| `fk_lancamento_inss` | `bigint unsigned` | FK → lancamento.id | YES | NULL |  |
| `fk_lancamento_irrf` | `bigint unsigned` | FK → lancamento.id | YES | NULL |  |
| `fk_usuario_cancelamento` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `numero` | `bigint` |  | NO | NULL |  |
| `tipo_servico` | `int` |  | NO | NULL |  |
| `data_emissao` | `datetime` |  | NO | NULL |  |
| `data_cancelamento` | `datetime` |  | YES | NULL |  |
| `descricao_servicos` | `text` |  | NO | NULL |  |
| `vr_total_nota` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_liquido_nf` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_base_calculo_iss` | `decimal(15,2)` |  | NO | NULL |  |
| `pr_aliquota_iss` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_iss` | `decimal(15,2)` |  | NO | NULL |  |
| `iss_retido` | `tinyint` |  | NO | NULL |  |
| `vr_base_calculo_inss` | `decimal(15,2)` |  | NO | NULL |  |
| `pr_aliquota_inss` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_inss` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_base_calculo_irrf` | `decimal(15,2)` |  | NO | NULL |  |
| `pr_aliquota_irrf` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_irrf` | `decimal(15,2)` |  | NO | NULL |  |
| `qtd_dependente` | `int` |  | NO | NULL |  |
| `vr_deducao_dep` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_desc_simplificado` | `decimal(15,2)` |  | NO | NULL |  |
| `chave_validacao` | `varchar(20)` |  | NO | NULL |  |
| `motivo_cancelamento` | `varchar(200)` |  | YES | NULL |  |
| `situacao` | `int` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `nota_cancelar`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:07
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_nota` | `bigint unsigned` | FK → nota.id | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `nota_contribuinte`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:05
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.08

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte_original` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_pais` | `bigint unsigned` | FK → pais.id | NO | NULL |  |
| `fk_cidade` | `bigint unsigned` | FK → cidade.id | YES | NULL |  |
| `fk_item_servico` | `bigint unsigned` | FK → item_servico.id | NO | NULL |  |
| `razao_social` | `varchar(100)` |  | NO | NULL |  |
| `fantasia` | `varchar(100)` |  | NO | NULL |  |
| `cpf_cnpj` | `varchar(18)` |  | NO | NULL |  |
| `email` | `varchar(100)` |  | YES | NULL |  |
| `contato` | `varchar(20)` |  | NO | NULL |  |
| `contato2` | `varchar(20)` |  | YES | NULL |  |
| `cep` | `varchar(9)` |  | YES | NULL |  |
| `endereco` | `varchar(100)` |  | NO | NULL |  |
| `numero` | `varchar(10)` |  | YES | NULL |  |
| `bairro` | `varchar(100)` |  | YES | NULL |  |
| `complemento` | `varchar(200)` |  | YES | NULL |  |
| `ie` | `varchar(20)` |  | YES | NULL |  |
| `im` | `varchar(20)` |  | YES | NULL |  |
| `aliquota` | `decimal(15,2)` |  | NO | 0.00 |  |
| `simples_nacional` | `tinyint` |  | NO | 1 |  |
| `regime_especial_tributacao` | `tinyint` |  | NO | NULL |  |
| `incentivo_fiscal` | `tinyint` |  | NO | 0 |  |
| `porte` | `tinyint` |  | NO | 1 |  |
| `isencao` | `tinyint` |  | NO | 0 |  |
| `site` | `varchar(255)` |  | YES | NULL |  |
| `logo` | `varchar(191)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `nota_deducao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:07
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_nota` | `bigint unsigned` | FK → nota.id | NO | NULL |  |
| `tipo` | `tinyint unsigned` |  | NO | NULL |  |
| `descricao` | `varchar(150)` |  | YES | NULL |  |
| `fornecedor_tipo` | `tinyint unsigned` |  | NO | NULL |  |
| `fornecedor_documento` | `varchar(40)` |  | NO | NULL |  |
| `fornecedor_codigo_pais` | `varchar(4)` |  | YES | NULL |  |
| `data_emissao` | `date` |  | NO | NULL |  |
| `valor_deducao` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_utilizado` | `decimal(15,2)` |  | NO | NULL |  |
| `documento_tipo` | `tinyint unsigned` |  | YES | NULL |  |
| `documento_numero` | `varchar(255)` |  | YES | NULL |  |
| `documento_chave` | `varchar(44)` |  | YES | NULL |  |
| `documento_uf` | `varchar(2)` |  | YES | NULL |  |
| `documento_codigo_municipio` | `varchar(7)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `nota_fila_api`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:08
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `protocolo` | `varchar(10)` |  | NO | NULL |  |
| `xml` | `longtext` |  | YES | NULL |  |
| `status` | `tinyint` |  | NO | NULL |  |
| `obs` | `varchar(191)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `nota_tomador`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:06
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_tomador_original` | `bigint unsigned` | FK → tomador.id | NO | NULL |  |
| `fk_pais` | `bigint unsigned` | FK → pais.id | NO | NULL |  |
| `fk_cidade` | `bigint unsigned` | FK → cidade.id | YES | NULL |  |
| `tipo` | `tinyint` |  | NO | NULL |  |
| `razao_social` | `varchar(100)` |  | NO | NULL |  |
| `fantasia` | `varchar(100)` |  | NO | NULL |  |
| `cpf_cnpj` | `varchar(18)` |  | NO | NULL |  |
| `email` | `varchar(100)` |  | YES | NULL |  |
| `contato` | `varchar(20)` |  | YES | NULL |  |
| `contato2` | `varchar(20)` |  | YES | NULL |  |
| `cep` | `varchar(9)` |  | YES | NULL |  |
| `endereco` | `varchar(100)` |  | NO | NULL |  |
| `numero` | `varchar(10)` |  | YES | NULL |  |
| `bairro` | `varchar(100)` |  | YES | NULL |  |
| `complemento` | `varchar(200)` |  | YES | NULL |  |
| `ie` | `varchar(20)` |  | YES | NULL |  |
| `im` | `varchar(20)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `orgao_emissor`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:08
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 186
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(191)` |  | NO | NULL |  |
| `sigla` | `varchar(10)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `pais`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:46
- **Última atualização:** 2025-05-02 13:03:20
- **Número de linhas (estimado):** 246
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `sigla2` | `varchar(2)` |  | NO | NULL |  |
| `sigla3` | `varchar(3)` |  | NO | NULL |  |
| `codigo` | `varchar(10)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `parametro`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 25
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(200)` |  | NO | NULL |  |
| `valor` | `varchar(200)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `parcelamento`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:00
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_receita_classificacao` | `bigint unsigned` | FK → receita_classificacao.id | NO | NULL |  |
| `descricao` | `varchar(191)` |  | NO | NULL |  |
| `data_vencimento_cota1` | `date` |  | YES | NULL |  |
| `data_vencimento_cota2` | `date` |  | YES | NULL |  |
| `data_vencimento_cota3` | `date` |  | YES | NULL |  |
| `data_vencimento_cota4` | `date` |  | YES | NULL |  |
| `data_vencimento_cota5` | `date` |  | YES | NULL |  |
| `data_vencimento_cota6` | `date` |  | YES | NULL |  |
| `data_vencimento_cota7` | `date` |  | YES | NULL |  |
| `data_vencimento_cota8` | `date` |  | YES | NULL |  |
| `data_vencimento_cota9` | `date` |  | YES | NULL |  |
| `data_vencimento_cota10` | `date` |  | YES | NULL |  |
| `data_vencimento_cota11` | `date` |  | YES | NULL |  |
| `data_vencimento_cota12` | `date` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `parcelamento_da`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:10
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_parcelamento_debito` | `bigint unsigned` | FK → parcelamento_debito.id | NO | NULL |  |
| `fk_lancamento_cota` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `parcelamento_debito`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:10
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_cancelamento` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `numero` | `int` |  | NO | NULL |  |
| `data` | `datetime` |  | NO | NULL |  |
| `data_cancelamento` | `datetime` |  | YES | NULL |  |
| `qtd_parcelas` | `int` |  | NO | NULL |  |
| `vencimento_inicial` | `date` |  | NO | NULL |  |
| `vr_total_divida` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_juros` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_multa` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_correcao` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_entrada` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_parcelamento` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_juros_adicional` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_total_parcelamento` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_desconto_juros` | `decimal(15,2)` |  | NO | NULL |  |
| `vr_desconto_multa` | `decimal(15,2)` |  | NO | NULL |  |
| `observacao` | `varchar(255)` |  | YES | NULL |  |
| `motivo_cancelamento` | `varchar(255)` |  | YES | NULL |  |
| `situacao` | `tinyint` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `parcelamento_faixa`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:00
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_parcelamento` | `bigint unsigned` | FK → parcelamento.id | NO | NULL |  |
| `valor_faixa_inicial` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_faixa_final` | `decimal(15,2)` |  | NO | NULL |  |
| `qtd_parcelas` | `int` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `password_resets`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:48
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `email` | `varchar(191)` |  | NO | NULL |  |
| `token` | `varchar(191)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `permissao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:48
- **Última atualização:** 2025-05-02 13:06:07
- **Número de linhas (estimado):** 433
- **Tamanho aprox. (MB):** 0.11

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_menu_lateral` | `bigint unsigned` | FK → menu_lateral.id | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `rota` | `varchar(100)` |  | NO | NULL |  |
| `descricao` | `varchar(191)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `personal_access_tokens`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:46
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `tokenable_type` | `varchar(191)` |  | NO | NULL |  |
| `tokenable_id` | `bigint unsigned` |  | NO | NULL |  |
| `name` | `varchar(191)` |  | NO | NULL |  |
| `token` | `varchar(64)` |  | NO | NULL |  |
| `abilities` | `text` |  | YES | NULL |  |
| `last_used_at` | `timestamp` |  | YES | NULL |  |
| `expires_at` | `timestamp` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `procedimento_tipo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:00
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `processamento`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:01
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.08

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_receita_classificacao` | `bigint unsigned` | FK → receita_classificacao.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_cancelamento` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `fk_parcelamento` | `bigint unsigned` | FK → parcelamento.id | YES | NULL |  |
| `numero` | `int` |  | NO | NULL |  |
| `periodo` | `tinyint` |  | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `inscricao` | `varchar(30)` |  | YES | NULL |  |
| `data_processamento` | `datetime` |  | NO | NULL |  |
| `percentual_desconto_unico` | `decimal(15,2)` |  | YES | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `data_emissao` | `date` |  | NO | NULL |  |
| `data_vencimento` | `date` |  | NO | NULL |  |
| `qtd_guias` | `int unsigned` |  | NO | 0 |  |
| `qtd_cotas` | `int unsigned` |  | NO | 0 |  |
| `motivo_cancelamento` | `varchar(200)` |  | YES | NULL |  |
| `situacao` | `tinyint` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `processamento_da`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:08
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_classificacao_receita` | `bigint unsigned` |  | YES | NULL |  |
| `numero_livro` | `int` |  | NO | NULL |  |
| `exercicio` | `int unsigned` |  | NO | NULL |  |
| `data_processamento` | `datetime` |  | NO | NULL |  |
| `data_inscricao` | `date` |  | NO | NULL |  |
| `arquivo` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `processamento_iptu`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:13
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_parcelamento` | `bigint unsigned` | FK → parcelamento.id | YES | NULL |  |
| `fk_modelo_dam` | `bigint unsigned` | FK → modelo_dam.id | YES | NULL |  |
| `exercicio` | `int` |  | NO | NULL |  |
| `data_emissao` | `date` |  | NO | NULL |  |
| `data_vencimento` | `date` |  | YES | NULL |  |
| `qtd_guias` | `int` |  | NO | NULL |  |
| `qtd_cotas` | `int` |  | NO | NULL |  |
| `pr_desconto_cota_unica` | `decimal(5,2)` |  | NO | NULL |  |
| `pr_desconto_trsd` | `decimal(5,2)` |  | NO | NULL |  |
| `inscricao` | `varchar(20)` |  | YES | NULL |  |
| `situacao` | `int` |  | NO | NULL |  |
| `arquivo` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `processamento_iptu_imovel`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:13
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.08

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_processamento_iptu` | `bigint unsigned` | FK → processamento_iptu.id | NO | NULL |  |
| `fk_imovel` | `bigint unsigned` | FK → imovel.id | NO | NULL |  |
| `fk_logradouro` | `bigint unsigned` | FK → logradouro.id | YES | NULL |  |
| `fk_lancamento` | `bigint unsigned` | FK → lancamento.id | NO | NULL |  |
| `origem` | `tinyint` |  | NO | 0 |  |
| `cpf_cnpj` | `varchar(14)` |  | NO | NULL |  |
| `razao_social` | `varchar(100)` |  | NO | NULL |  |
| `inscricao` | `varchar(191)` |  | NO | NULL |  |
| `valor_venal_terr` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_venal_edif` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_iptu_imovel` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_trsd` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_cip` | `decimal(15,2)` |  | NO | 0.00 |  |
| `valor_desconto` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_total` | `decimal(15,2)` |  | NO | NULL |  |
| `aliquota_terr` | `decimal(15,2)` |  | NO | NULL |  |
| `aliquota_edif` | `decimal(15,2)` |  | NO | NULL |  |
| `testada` | `decimal(15,2)` |  | NO | NULL |  |
| `profundidade` | `decimal(15,2)` |  | NO | NULL |  |
| `area_lote` | `decimal(15,2)` |  | NO | NULL |  |
| `area_construcao` | `decimal(15,2)` |  | NO | NULL |  |
| `area_total` | `decimal(15,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `protocolo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:53
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_assunto` | `bigint unsigned` | FK → protocolo_assunto.id | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_protocolo_vinculado` | `bigint unsigned` | FK → protocolo.id | YES | NULL |  |
| `situacao` | `tinyint` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `protocolo_anexo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:54
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_mensagem` | `bigint unsigned` | FK → protocolo_mensagem.id | NO | NULL |  |
| `anexo` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `protocolo_assunto`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:53
- **Última atualização:** 2025-05-02 13:05:13
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `protocolo_especie`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:54
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `prazo_maximo` | `int` |  | NO | NULL |  |
| `mensagem` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `protocolo_mensagem`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:54
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_protocolo` | `bigint unsigned` | FK → protocolo.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `mensagem` | `text` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `receita`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:55
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 10
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_receita_classificacao` | `bigint unsigned` | FK → receita_classificacao.id | NO | NULL |  |
| `codigo` | `int` |  | NO | NULL |  |
| `descricao` | `varchar(255)` |  | NO | NULL |  |
| `valor` | `decimal(15,2)` |  | NO | NULL |  |
| `multiplicador` | `tinyint` |  | NO | NULL |  |
| `complemento` | `varchar(30)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `receita_classificacao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:54
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 21
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_conta_contabil` | `bigint unsigned` | FK → conta_contabil.id | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `unidade` | `tinyint unsigned` |  | NO | NULL |  |
| `periodo` | `tinyint` |  | NO | NULL |  |
| `avulso` | `tinyint unsigned` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `receita_condutor`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:59
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario_cadastro` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_condutor` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_contribuinte_receita` | `bigint unsigned` | FK → contribuinte_receita.id | NO | NULL |  |
| `baixa` | `datetime` |  | YES | NULL |  |
| `status` | `tinyint` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `receita_tipo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:54
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 5
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_indice` | `bigint unsigned` | FK → indice_financeiro.id | NO | NULL |  |
| `fk_multa` | `bigint unsigned` | FK → multa.id | NO | NULL |  |
| `fk_juros` | `bigint unsigned` | FK → juros.id | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `natureza` | `tinyint unsigned` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `receita_valor`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:55
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_usuario_situacao` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_receita` | `bigint unsigned` | FK → receita.id | NO | NULL |  |
| `data` | `date` |  | NO | NULL |  |
| `valor` | `decimal(12,2)` |  | NO | NULL |  |
| `situacao` | `tinyint` |  | NO | NULL |  |
| `data_situacao` | `datetime` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `retorno_banco`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:10
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_banco` | `bigint unsigned` | FK → banco.id | NO | NULL |  |
| `data_processamento` | `datetime` |  | NO | NULL |  |
| `data_geracao_arquivo` | `date` |  | NO | NULL |  |
| `nsa` | `int` |  | NO | NULL |  |
| `nome_arquivo` | `varchar(100)` |  | NO | NULL |  |
| `valor_total` | `decimal(15,2)` |  | NO | 0.00 |  |
| `qtd_registros` | `int` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `retorno_banco_item`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:11
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_retorno_banco` | `bigint unsigned` | FK → retorno_banco.id | NO | NULL |  |
| `conta_creditada` | `varchar(20)` |  | YES | NULL |  |
| `data_pagamento` | `date` |  | NO | NULL |  |
| `data_credito` | `date` |  | NO | NULL |  |
| `valor_recebido` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_tarifa` | `decimal(15,2)` |  | NO | NULL |  |
| `agencia_arrecad` | `varchar(8)` |  | YES | NULL |  |
| `num_autenticacao` | `varchar(23)` |  | YES | NULL |  |
| `codigo_barras` | `varchar(44)` |  | NO | NULL |  |
| `mensagem_ocorrencia` | `varchar(255)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `setor`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 4
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `siafic_lote`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:16
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_siafic_servico` | `bigint unsigned` | FK → siafic_servico.id | NO | NULL |  |
| `data_geracao` | `datetime` |  | NO | NULL |  |
| `data_credito` | `date` |  | NO | NULL |  |
| `data_envio` | `datetime` |  | NO | NULL |  |
| `status` | `tinyint` |  | NO | NULL |  |
| `mensagem` | `text` |  | YES | NULL |  |
| `id_transacao` | `varchar(100)` |  | YES | NULL |  |
| `json` | `longtext` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `siafic_lote_item`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:16
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_siafic_lote` | `bigint unsigned` | FK → siafic_lote.id | NO | NULL |  |
| `fk_lancamento_cota` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `siafic_servico`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:16
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_siafic_sistema` | `bigint unsigned` | FK → siafic_sistema.id | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `endpoint_servico` | `text` |  | NO | NULL |  |
| `gera_token` | `tinyint` |  | NO | NULL |  |
| `tag_token` | `varchar(50)` |  | YES | NULL |  |
| `tipo_lancamento` | `char(1)` |  | NO | NULL |  |
| `tipo_contabil` | `char(2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `siafic_sistema`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:16
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `endpoint_consulta_receita` | `text` |  | YES | NULL |  |
| `api_key` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `situacao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:00
- **Última atualização:** 2025-05-02 13:05:32
- **Número de linhas (estimado):** 6
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(30)` |  | NO | NULL |  |
| `codigo` | `int` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `termo_inscricao_da`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:15
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.09

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_usuario_certidao` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `fk_contribuinte_responsavel` | `bigint unsigned` | FK → contribuinte.id | YES | NULL |  |
| `fk_usuario_situacao` | `bigint unsigned` | FK → users.id | YES | NULL |  |
| `numero` | `int` |  | NO | NULL |  |
| `data_vencimento_inicial` | `date` |  | NO | NULL |  |
| `data_vencimento_final` | `date` |  | NO | NULL |  |
| `fundamento_legal` | `text` |  | NO | NULL |  |
| `arquivo` | `text` |  | NO | NULL |  |
| `situacao` | `int` |  | NO | NULL |  |
| `data_situacao` | `datetime` |  | YES | NULL |  |
| `certidao_numero` | `int` |  | YES | NULL |  |
| `certidao_data_emissao` | `datetime` |  | YES | NULL |  |
| `certidao_arquivo` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `termo_inscricao_da_lancamento`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:15
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_termo_inscricao_da` | `bigint unsigned` | FK → termo_inscricao_da.id | NO | NULL |  |
| `fk_lancamento_cota` | `bigint unsigned` | FK → lancamento_cota.id | NO | NULL |  |
| `valor_tributo` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_multa` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_juros` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_correcao` | `decimal(15,2)` |  | NO | NULL |  |
| `valor_total` | `decimal(15,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `termo_inscricao_da_movimentacao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:16
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.05

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_termo_inscricao_da` | `bigint unsigned` | FK → termo_inscricao_da.id | NO | NULL |  |
| `fk_usuario` | `bigint unsigned` | FK → users.id | NO | NULL |  |
| `data` | `datetime` |  | NO | NULL |  |
| `descricao` | `text` |  | NO | NULL |  |
| `anexo` | `text` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `tipo_alvara`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:47
- **Última atualização:** 2025-05-02 13:06:00
- **Número de linhas (estimado):** 7
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `tipo_logradouro`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:46
- **Última atualização:** 2025-05-02 13:04:50
- **Número de linhas (estimado):** 180
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `tipo` | `varchar(3)` |  | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `tipo_movimentacao`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:03:08
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 2
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(191)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `tomador`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:47
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_pais` | `bigint unsigned` | FK → pais.id | NO | NULL |  |
| `fk_cidade` | `bigint unsigned` | FK → cidade.id | YES | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `tipo` | `tinyint` |  | NO | 1 |  |
| `razao_social` | `varchar(100)` |  | NO | NULL |  |
| `fantasia` | `varchar(100)` |  | YES | NULL |  |
| `cpf_cnpj` | `varchar(18)` |  | NO | NULL |  |
| `email` | `varchar(100)` |  | YES | NULL |  |
| `contato` | `varchar(20)` |  | YES | NULL |  |
| `contato2` | `varchar(20)` |  | YES | NULL |  |
| `cep` | `varchar(9)` |  | YES | NULL |  |
| `endereco` | `varchar(100)` |  | NO | NULL |  |
| `numero` | `varchar(10)` |  | YES | NULL |  |
| `bairro` | `varchar(100)` |  | YES | NULL |  |
| `complemento` | `varchar(200)` |  | YES | NULL |  |
| `ie` | `varchar(20)` |  | YES | NULL |  |
| `im` | `varchar(20)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `ufm`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:49
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 2
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `valor` | `decimal(12,2)` |  | NO | 0.00 |  |
| `status` | `tinyint unsigned` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `users`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:48
- **Última atualização:** 2025-05-12 16:45:17
- **Número de linhas (estimado):** 3
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_contribuinte` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_cidade` | `bigint unsigned` | FK → cidade.id | YES | NULL |  |
| `nome` | `varchar(100)` |  | NO | NULL |  |
| `email` | `varchar(100)` |  | YES | NULL |  |
| `cpf` | `varchar(14)` |  | YES | NULL |  |
| `rg` | `varchar(20)` |  | YES | NULL |  |
| `genero` | `tinyint` |  | YES | NULL |  |
| `data_nascimento` | `date` |  | YES | NULL |  |
| `contato` | `varchar(14)` |  | YES | NULL |  |
| `cep` | `varchar(9)` |  | YES | NULL |  |
| `endereco` | `varchar(100)` |  | YES | NULL |  |
| `bairro` | `varchar(100)` |  | YES | NULL |  |
| `complemento` | `varchar(200)` |  | YES | NULL |  |
| `numero` | `varchar(10)` |  | YES | NULL |  |
| `curso` | `varchar(100)` |  | YES | NULL |  |
| `instituicao` | `varchar(100)` |  | YES | NULL |  |
| `profissao` | `varchar(100)` |  | YES | NULL |  |
| `status` | `tinyint` |  | NO | 1 |  |
| `ativo` | `tinyint` |  | NO | 0 |  |
| `foto` | `text` |  | YES | NULL |  |
| `background` | `text` |  | YES | NULL |  |
| `email_verified_at` | `timestamp` |  | YES | NULL |  |
| `last_login_at` | `datetime` |  | YES | NULL |  |
| `last_login_ip` | `varchar(191)` |  | YES | NULL |  |
| `password` | `varchar(191)` |  | NO | NULL |  |
| `descricao` | `text` |  | YES | NULL |  |
| `remember_token` | `varchar(100)` |  | YES | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |
| `deleted_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `variacao_valor`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:55
- **Última atualização:** 2025-05-02 13:06:14
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.03

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_receita_classificacao` | `bigint unsigned` | FK → receita_classificacao.id | NO | NULL |  |
| `competencia` | `date` |  | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `indice` | `decimal(12,2)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `veiculo`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:50
- **Última atualização:** Nunca
- **Número de linhas (estimado):** 0
- **Tamanho aprox. (MB):** 0.06

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `fk_proprietario` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_condutor` | `bigint unsigned` | FK → contribuinte.id | NO | NULL |  |
| `fk_marca` | `bigint unsigned` | FK → veiculo_marca.id | NO | NULL |  |
| `placa` | `varchar(12)` |  | NO | NULL |  |
| `renavam` | `varchar(30)` |  | NO | NULL |  |
| `chassi` | `varchar(30)` |  | NO | NULL |  |
| `modelo` | `varchar(100)` |  | NO | NULL |  |
| `ano_modelo` | `varchar(4)` |  | NO | NULL |  |
| `cor` | `varchar(20)` |  | NO | NULL |  |
| `responsavel` | `varchar(100)` |  | NO | NULL |  |
| `status` | `tinyint` |  | NO | 1 |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---

## 🗂️ Tabela: `veiculo_marca`

- **Engine:** InnoDB
- **Collation:** utf8mb4_unicode_ci
- **Comentário da tabela:** -
- **Criada em:** 2025-05-02 13:02:50
- **Última atualização:** 2025-05-02 13:05:12
- **Número de linhas (estimado):** 2
- **Tamanho aprox. (MB):** 0.02

| Coluna | Tipo | Chave | Nulo | Padrão | Comentário |
|--------|------|-------|------|--------|------------|
| `id` | `bigint unsigned` | PK | NO | NULL |  |
| `descricao` | `varchar(100)` |  | NO | NULL |  |
| `created_at` | `timestamp` |  | YES | NULL |  |
| `updated_at` | `timestamp` |  | YES | NULL |  |

---


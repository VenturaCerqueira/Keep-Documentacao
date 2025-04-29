---
title: Índice Financeiro - e-Contrib
description: Página de documentação sobre o Índice Financeiro no sistema e-Contrib.
---

# 📊 e-contrib - Modelo e-2025

## 📋 Lista de Índice Financeiro  
Utilizada para corrigir valores monetários ou ajustar tributos ao longo do tempo, considerando a inflação ou outras variações econômicas.  
**Exemplo:** IPC, IGPM e outros.

---

## 🌐 Rotas/Routes:
✅ **Lista de Índices Financeiro**:  
- [http://www.e-contrib.com.br/gestaotributaria/**entidade**/cadastros/indices-financeiro](http://www.e-contrib.com.br/gestaotributaria/**entidade**/cadastros/indices-financeiro)

✅ **Novo Índice Financeiro**:  
- [http://www.e-contrib.com.br/gestaotributaria/**entidade**/cadastros/indices-financeiro/criar](http://www.e-contrib.com.br/gestaotributaria/**entidade**/cadastros/indices-financeiro/criar)

✅ **Índices Financeiro Editar por Competência**:  
- [http://www.e-contrib.com.br/gestaotributaria/**entidade**/cadastros/indices-financeiro/editar/**Índice_selecionado**](http://www.e-contrib.com.br/gestaotributaria/**entidade**/cadastros/indices-financeiro/editar/**Índice_selecionado**)

---

## 🎲 Modelo de Dados:
| **#** | **Nome Físico**             |
|-------|------------------------------|
| 01    | indice_financeiro            |
| 02    | indice_financeiro_correcao   |

---

## ✅ Tabelas Relacionadas com 01 - indice_financeiro:
| **#** | **Nome Físico**             | **Relação** |
|-------|------------------------------|-------------|
| 01    | indice_financeiro_correcao   | 1 - N       |
| 02    | receita_tipo                 | 1 - N       |

---

## ✅ Tabelas Dependentes de 02 - indice_financeiro_correcao:
| **#** | **Nome Físico**             | **Relação** |
|-------|------------------------------|-------------|
| 01    | indice_financeiro            | 1 - N       |

---

## 🔢 Campos de 01 - indice_financeiro:
| **#** | **Nome**                     | **Tabela Raiz** | **Tipo/Tamanho**        | **Descrição**                                | **Campo Sistema** |
|-------|------------------------------|-----------------|-------------------------|----------------------------------------------|-------------------|
| 01    | id                           |                 | bigint UN AI PK         |                                              |                   |
| 02    | nome *                       |                 | varchar(100)            | Nome do índice monetário.                    | Nome              |

---

## 🔢 Campos de 02 - indice_financeiro_correcao:
| **#** | **Nome**                     | **Tabela Raiz**          | **Tipo/Tamanho**        | **Descrição**                                | **Campo Sistema** |
|-------|------------------------------|--------------------------|-------------------------|----------------------------------------------|-------------------|
| 01    | id                           |                          | bigint UN AI PK         |                                              |                   |
| 02    | fk_indice                    | indice_financeiro_correcao | bigint UN               | Código *"id"* da tabela de indice_financeiro |                   |
| 03    | competencia                  |                          | date                    | Data de competência do ajuste da inflação.   | Ano               |
| 04    | percentual                   |                          | decimal(15,2)           | Cadastro do indicador da inflação.           | IPCA ACUMULADO %  |

---

## 🛠️ Ações / Botões:
| **#** | **Nome**                     | **Função** |
|-------|------------------------------|------------|
| 01    | Editar                       |            |


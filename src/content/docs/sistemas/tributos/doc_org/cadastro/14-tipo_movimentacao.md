---
title: Tipo de Movimentação
description: Página de documentação sobre Tipos de Movimentação no sistema e-Contrib.
---
## 🗺️ Cadastro - Tipo movimentação
Cadastro vinculado ao protocolo do contribuinte.  

# 🎲 - Modelo de dados:
 **\#**  |**Nome Físico**               |
---------|------------------------------|
1        | tipo_movimentacao            |

#
#   ✅ - Tabelas relacionadas:
 **\#**  |**Nome Fisico**               |   **Relação** |
---------|------------------------------|---------------|      
01       | contribuinte_movimentacao    |    1 - N      |
#
# 🔢 - Campos
 **\#**  | **Nome**                     | **Tabela Raiz**         | **Tipo/Tamanho**        | **Descrição**                                                                           | **Campo sistema**                      |
---------|------------------------------|-------------------------|-------------------------|-----------------------------------------------------------------------------------------|----------------------------------------|
01       | id                           |                         | bigint UN AI PK         |   ´                                                                                      |                                        |
02       | descricao *                  |                         | varchar(191)            |                                                                                         | Descrição                              |

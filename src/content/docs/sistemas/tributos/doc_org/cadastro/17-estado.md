---
title: Estado
description: Página de documentação sobre Estados no sistema e-Contrib.
---
## 🗺️ Cadastro - Estado
Cadastro de estado base IBGE - BRASIL.

# 🎲 - Modelo de dados:
 **\#**  |**Nome Físico**               |
---------|------------------------------|
1        | estado                       |

#
#   ✅ - Tabelas relacionadas:
 **\#**  |**Nome Fisico**               |   **Relação** |
---------|------------------------------|---------------|      
1        | cidade                       |     1 - n     |

#
# 🔢 - Campos
 **\#**  | **Coluna**                   | **Tabela Raiz**         | **Tipo/Tamanho**        | **Descrição**                                                                        | **Campo sistema**                      |
---------|------------------------------|-------------------------|-------------------------|--------------------------------------------------------------------------------------|----------------------------------------|
01       | id                           |                         | bigint UN AI PK         |                                                                                      |                                        |
02       | uf                           |                         | varchar(2)              | Sigla de duas letras para identificar os estados.                                       |                                        | 
03       | nome                         |                         | varchar(191)            | Nome dos estados.                                                                    |                                        |  
04       | ibge                         |                         | int                     | **Campo sem utilização**                                                             |                                        |
05       | aliq_icms_interna            |                         | decimal(12,2)           | **Campo sem utilização**                                                             |                                        |

---
title: CNAE Item Serviço
description: Página de documentação sobre CNAE e Itens de Serviço no sistema e-Contrib.
---
##  Cadastro - CNAE item de serviço 
Tabela relacoional com codigo do CNAE. 

# 🎲 - Modelo de dados:
 **\#**  |**Nome Físico**               |
---------|------------------------------|
01       | cnae_item_servico            |

#
#   ✅ - Tabelas relacionadas: 
 **\#**  |**Nome Físico**               |   **Relação** |
---------|------------------------------|---------------|      
01       | cnae                         |    1 - N      |
02       | item_servico                 |    1 - N      | 

#
# 🔢 - Campos:
 **\#**  | **Nome**                     | **Tabela Raiz**         | **Tipo/Tamanho**        | **Descrição**                                                                        | **Campo sistema**                      |
---------|------------------------------|-------------------------|-------------------------|--------------------------------------------------------------------------------------|----------------------------------------|
01       | id                           |                         | bigint UN AI PK         |                                                                                      |                                        |
02       | fk_cnae                      | cnae                    | bigint(20)              | Código *"id"* da tabela de **cnae**.                                                 |                                        |
03       | fk_item_servico              | item_servico            | bigint(20)              | Código *"id"* da tabela de **item_servico**.                                         |                                        |

# Ações / botões:
 **\#**  |**Nome**                      |   **Função**  |
---------|------------------------------|---------------|
1        | Editar                       |               |

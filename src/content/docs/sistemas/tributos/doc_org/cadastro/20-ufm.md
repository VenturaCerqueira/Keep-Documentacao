---
title: UFM (Unidade Fiscal do Município)
description: Página de documentação sobre UFM no sistema e-Contrib.
---
##  Cadastro - UFM (Unidade Fiscal do Município)
Utilizada para corrigir monetariamente os valores dos tributos, compensando as distorções causadas pela inflação. Atualizada anualmente via decreto. 

# 🎲 - Modelo de dados:
 **\#**  |**Nome Físico**               |
---------|------------------------------|
01       | ufm                          |

#
# 🔢 - Campos:
 **\#**  | **Nome**                     | **Tabela Raiz**         | **Tipo/Tamanho**        | **Descrição**                                                                        | **Campo sistema**                      |
---------|------------------------------|-------------------------|-------------------------|--------------------------------------------------------------------------------------|----------------------------------------|
01       | id                           |                         | bigint UN AI PK         |                                                                                      |                                        |
02       | competencia                  |                         | date                    | Período fiscal ao qual a UFM se refere.                                              |                                        |
03       | valor                        |                         | decimal(12,2)           | Valor unidade fiscal do município.                                                   |                                        |
04       | status                       |                         | tinyint UN              |                                                                                      |                                        |

# Ações / botões:
 **\#**  |**Nome**                      |   **Função**  |
---------|------------------------------|---------------|
1        | Editar                       |               |

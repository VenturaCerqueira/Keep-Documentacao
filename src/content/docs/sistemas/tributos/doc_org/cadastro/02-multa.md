---
title: Multa 📄
description: Página de documentação sobre Multas no sistema e-Contrib.
---
## 🗂️ Descrição:
:::tip[Cadastro de Multas]
Cadastro de multas aplicadas para cálculo no DAM, com configuração de **prazo inicial**, **prazo final** e **percentual aplicado**.
:::


---

## 🧩 Modelo de Dados

| Nº  | Nome Físico     |
|-----|-----------------|
| 01  | `multa`         |
| 02  | `multa_prazo`   |

---

## 🔗 Rotas do Sistema

### ✅ Listagem de Multa 
```sh title="Listagem de Multas"
http://www.e-contrib.com.br/gestaotributaria/entidade/cadastros/juros
```

### ➕ Nova Multa
```sh title="Cadastro de nova Multa" 
http://www.e-contrib.com.br/gestaotributaria/entidade/cadastros/juros/criar
```

### ✏️ Editar Multa
```sh title="Editar uma Multa"
http://www.e-contrib.com.br/gestaotributaria/entidade/cadastros/juros/editar/multa_selecionado
```


## 🧷 Tabelas Relacionadas

### 🔗 Tabela: `multa`

| Nº  | Nome Físico                                                                                                 | Relação |
|-----|-------------------------------------------------------------------------------------------------------------|---------|
| 01  | [`receita_tipo`](../../doc_org/cadastro/07-receita_tipo) | 1 → N   |

---

## 📊 Campos da Tabela: `multa`

| Nº  | Nome          | Tipo/Tamanho        | Descrição                                                 | Campo no Sistema  |
|-----|---------------|---------------------|------------------------------------------------------------|-------------------|
| 01  | `id`          | bigint UN AI PK     | Identificador único.                                       | -                 |
| 02  | `descricao`   | varchar(30)         | Texto sobre a natureza da multa.                           | Descrição         |
| 03  | `competencia` | date                | Período fiscal ao qual a multa se refere.                  | Competência       |

---

## 📊 Campos da Tabela: `multa_prazo`

| Nº  | Nome            | Tipo/Tamanho      | Tabela Raiz | Descrição                                                                 | Campo no Sistema |
|-----|-----------------|-------------------|-------------|---------------------------------------------------------------------------|------------------|
| 01  | `id`            | bigint UN AI PK   | -           | Identificador único.                                                     | -                |
| 02  | `fk_multa`      | bigint(20)        | multa       | Chave estrangeira da tabela `multa`.                                     | -                |
| 03  | `prazo_inicial` | int(11)           | -           | Dias de início para cálculo da multa.                                    | Prazo inicial    |
| 04  | `prazo_final`   | int(11)           | -           | Dias de término para aplicação da multa.                                 | Prazo final      |
| 05  | `percentual`    | decimal(15,2)     | -           | Percentual aplicado entre os prazos inicial e final.                     | Percentual       |

---

## 🧪 Ações / Botões no Sistema

| Nº  | Ação     | Função                          |
|-----|----------|----------------------------------|
| 01  | Editar   | Abre o formulário para edição   |
| 02  | View     | Visualiza os dados da multa     |
| 03  | Excluir  | Remove o registro do sistema    |

---

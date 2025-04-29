---
title: Veículo Marca
description: Página de documentação sobre Marcas de Veículos no sistema e-Contrib.
---
## 🚗 Cadastro - Veículo Marca  
Cadastro de marca de veículos base atualizada 2024.

# 🎲 - Modelo de dados:
 **\#**  |**Nome Físico**               |
---------|------------------------------|
1        | veiculo_marca                |

#
# Tabela de Veiculo_marca
 **\#**  | **Nome**                     | **Tabela Raiz**         | **Tipo/Tamanho**        | **Descrição**                                                                        | **Campo sistema**                      |
---------|------------------------------|-------------------------|-------------------------|--------------------------------------------------------------------------------------|----------------------------------------|
01       | id                           |                         | bigint UN AI PK         |                                                                                      |                                        |
02       | descricao *                  |                         | varchar(100)            | Marcas de veículos.                                                                  |  Descrição                             |



# Ações / botões:
 **\#**  |**Nome**                      |   **Função**  |
---------|------------------------------|---------------|
1        | Editar                       |               |
2        | Excluir                      |               |

# Script insert: 
        INSERT INTO db_gestaotributaria.veiculo_marca (id, descricao, created_at, updated_at) VALUES
            (1, 'Acura', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (2, 'Alfa Romeo', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (3, 'Aston Martin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (4, 'Audi', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (5, 'Bentley', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (6, 'BMW', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (7, 'Bugatti', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (8, 'Buick', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (9, 'BYD', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (10, 'Cadillac', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (11, 'Chery', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (12, 'Chevrolet', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (13, 'Chrysler', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (14, 'Citroën', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (15, 'Dacia', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (16, 'Daewoo', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (17, 'Daihatsu', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (18, 'Dodge', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (19, 'DS Automobiles', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (20, 'Ferrari', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (21, 'Fiat', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (22, 'Ford', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (23, 'Geely', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (24, 'GMC', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (25, 'Great Wall', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (26, 'Haval', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (27, 'Holden', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (28, 'Honda', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (29, 'Hyundai', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (30, 'Infiniti', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (31, 'Isuzu', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (32, 'Jaguar', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (33, 'Jeep', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (34, 'JMC', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (35, 'Kia', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (36, 'Koenigsegg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (37, 'Lamborghini', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (38, 'Lancia', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (39, 'Land Rover', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (40, 'Lexus', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (41, 'Lincoln', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (42, 'Lotus', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (43, 'Mahindra', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (44, 'Maserati', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (45, 'Maybach', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (46, 'Mazda', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (47, 'McLaren', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (48, 'Mercedes-Benz', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (49, 'MG', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (50, 'Mini', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (51, 'Mitsubishi', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (52, 'Nissan', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (53, 'Pagani', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (54, 'Peugeot', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (55, 'Polestar', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (56, 'Pontiac', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (57, 'Porsche', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (58, 'RAM', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (59, 'Renault', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (60, 'Rolls-Royce', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (61, 'Saab', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (62, 'Scion', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (63, 'Seat', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (64, 'Škoda', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (65, 'Smart', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (66, 'SsangYong', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (67, 'Subaru', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (68, 'Suzuki', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (69, 'Tata Motors', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (70, 'Tesla', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (71, 'Toyota', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (72, 'Volkswagen', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (73, 'Volvo', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (74, 'Wuling', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
            (75, 'Zotye', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


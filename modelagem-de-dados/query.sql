create database ecommerce;

create table produtos(
id serial primary key,
nome varchar(100),
descricao text,
preco integer,
quantidade_em_estoque integer,
categoria_id integer references categorias(id));

create table categorias (
id serial primary key,
nome varchar(50));

create table itens_do_pedido(
id serial primary key,
pedido_id int references pedidos(id),
quantidade int,
produto_id int references produtos(id));

create table pedidos(
id serial primary key,
valor int,   
cliente_cpf char(11),
vendedor_cpf char (11));

create table clientes (
cpf char(11) unique,
nome varchar(150) unique);

create table vendedores (
cpf char(11) unique,
nome varchar(150) unique);

insert into categorias(nome) 
values ('frutas'), ('verduras'), ('massas'),('bebidas'), ('utilidades');

insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Mamão',	'Rico em vitamina A, potássio e vitamina C',	300,	123, 1);

insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Maça',	'Fonte de potássio e fibras.',	90,	34, 1);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Cebola',	'Rico em quercetina, antocianinas, vitaminas do complexo B, C.',	50,	76, 2);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Abacate	',	'NÃO CONTÉM GLÚTEN.',	50,	76, 1);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Tomate',	'Rico em vitaminas A, B e C.',	125,	88, 2);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Acelga',	'NÃO CONTÉM GLÚTEN.	',	235,	13, 2);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('',	'NÃO CONTÉM GLÚTEN.	',	235,	13, 2);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Macarrão parafuso	',	'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais	',	690,	5, 3);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Massa para lasanha	',	'Uma reunião de família precisa ter comida boa e muita alegria.	',	875,	19, 3);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Refrigerante coca cola lata	',	'Sabor original	',	350,	189, 4);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Refrigerante Pepsi 2l	',	'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.	',	700,	12, 4);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Cerveja Heineken 600ml	',	'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado	',	1200,	500, 4);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Agua mineral sem gás	',	'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.	',	130,	478, 4);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Vassoura	',	'Pigmento, matéria sintética e metal.	',	2350,	30, 5);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Saco para lixo	',	'Reforçado para garantir mais segurança	',	1340,	90, 5);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Escova dental	',	'Faça uma limpeza profunda com a tecnologia inovadora	',	1000,	444, 5);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Balde para lixo 50l	',	'Possui tampa e fabricado com material reciclado	',	2290	,	55, 5);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Manga',	'Rico em Vitamina A, potássio e vitamina C	',	198,	176, 1);
insert into produtos(nome, descricao, preco, quantidade_em_estoque, categoria_id)
values 
('Uva	',	'NÃO CONTÉM GLÚTEN.	',	420,	90, 1);
delete from produtos where id=2;
delete from produtos where nome is null;
insert into clientes (cpf, nome) values ('80371350042','José Augusto Silva');
insert into clientes (cpf, nome) values ('67642869061','Antonio Oliveira
'	);

insert into clientes (cpf, nome) values ('63193310034','Ana Rodrigues
'	);
insert into clientes (cpf, nome) values ('75670505018','Maria da Conceição
'	);

insert into vendedores (cpf, nome) values ('82539841031','Rodrigo Sampaio
');
insert into vendedores (cpf, nome) values ('23262546003','Beatriz Souza Santos
');
insert into vendedores (cpf, nome) values ('28007155023','Carlos Eduardo
');

insert into pedidos (valor, cliente_cpf, vendedor_cpf) values (9650, '803713.50042', '28007155023')

insert into itens_do_pedido (quantidade, pedido_id, produto_id) values (1,1,1);
insert into pedidos (valor, cliente_cpf, vendedor_cpf)
values
(9650, '80371350042', '28007155023');		

insert into itens_do_pedido (quantidade, pedido_id, produto_id)
values 
(1,1,1);

update produtos set quantidade_em_estoque=quantidade_em_estoque-1 where id=1;



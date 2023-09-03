
select count(medicamento) from farmacia;
select min(idade) from usuarios;
select max(idade) from usuarios;
select avg(idade) from usuarios where idade>=18;
select sum(estoque) from farmacia where categoria='green' and categoria='black';
select sum(estoque) from farmacia where categoria!='null';
SELECT CONCAT(id,' - ','(',COALESCE(categoria, 'sem categoria'),')')FROM farmacia;
SELECT nome, idade, cast(cadastro as date) FROM usuarios WHERE EXTRACT(YEAR FROM cast(cadastro as timestamp)) = 2020
-- 12select nome, id, email, idade, age(cadastro, now()) from usuarios where age(cadastro, now())>18;
 --13;
select categoria, estoque from farmacia where categoria!='NULL';
select idade, count(idade) from usuarios where idade>=18 group by idade;
select distinct categoria, count (categoria) from farmacia group by categoria;
 








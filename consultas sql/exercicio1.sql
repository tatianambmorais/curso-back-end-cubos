select id, compositor from musicas; 
select composicao, tempo from musicas where tempo > 4*60;
select compositor, composicao from musicas where id between 47 and 123;
select * from musicas where compositor != null and compositor != 'Bach' and tempo>5*60;
select composicao, tempo from musicas where compositor='Mozart' or compositor='Bach';
select * from musicas order by id desc;
select * from musicas order by tempo desc;
select * from musicas order by tempo asc limit 5;
select * from musicas order by tempo desc limit 10;
select * from musicas order by tempo desc limit 10 offset 5;
select * from musicas order by tempo asc limit 10 offset 5;
select * from musicas limit 10 offset 39;
select * from musicas limit 12 offset 60;
select distinct coositor from musicas where compositor!='NULL';
select distinct coositor,composicao from musicas;
select * from musis where compositor='Bra%';
select  * from musas where ritmo like '% troppo';
select * from musis where composicao ilike '%quartet%';elect * from musis where composicao not ilike '%quartet%';
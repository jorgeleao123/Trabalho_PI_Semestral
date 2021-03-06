create database projeto_individual;

use projeto_individual;

-- -----------------------------
-- CRIANDO TABELAS
-- ----------------------------- 

create table Leads_Jorge (
	id_leads int not null auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(20),
    tipo_automovel char(1),
    descricao_mudanca varchar(200),
    primary key(id_leads)
) auto_increment = 1;	

select * from Leads_Jorge;

create table funcionario (
	id_funcionario int not null auto_increment,
    fk_equipe_autopeca int,
    fk_equipe_oficina int,
    nome_funcionario varchar(45),
    funcao_funcionario varchar(45),
    email_funcionario varchar(45),
    cpf_funcionario char(11),
    primary key(id_funcionario),
    foreign key(fk_equipe_autopeca)
		references funcionario(id_funcionario),
	foreign key(fk_equipe_oficina)
		references funcionario(id_funcionario)
) auto_increment = 100;
    
select * from funcionario;

create table reuniao (
	id_reuniao int not null auto_increment,
	id_contrato int,
    fk_funcionario int,
    fk_leads int,
    relatorio_reuniao varchar(500),
    primary key(id_reuniao),
    foreign key(id_contrato)
		references reuniao(id_reuniao),
    foreign key(fk_funcionario)
		references funcionario(id_funcionario),
	foreign key(fk_leads)
		references Leads_Jorge(id_leads)
) auto_increment = 150;

select * from reuniao;

create table cliente (
	id_cliente int not null auto_increment,
    fk_leads int not null,
    fk_funcionario int,
    placa_carro_cliente char(7),
    endereco_cliente varchar(100),
    gastos_cliente int,
    primary key(id_cliente),
    foreign key(fk_leads)
		references Leads_Jorge(id_leads),
	foreign key(fk_funcionario)
		references  funcionario(id_funcionario)
) auto_increment = 200;
    
select * from cliente;

create table comunidade (
	id_comunidade int not null auto_increment,
    fk_leads int,
    fk_cliente int,
    nome_comunidade varchar(45),
    estado_comunidade char(2),
    descricao_comunidade varchar(100),
    primary key(id_comunidade),
    foreign key(fk_leads)
		references Leads_Jorge(id_leads),
	foreign key(fk_cliente)
		references cliente(id_cliente)
) auto_increment = 250;

select * from comunidade;

CREATE TABLE publicacao (
	id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100),
	fkUsuario INT
);

select * from publicacao;

-- -------------------
-- INSERINDO DADOS 
-- -------------------

insert into funcionario values 
	(100, 100, 100, 'Jorge', 'Product Owner', 'jorge.leao@bandtec.com', 48022190837),
	(null, 100, 100, 'Rogerio', 'Gerenciar a equipe de pintura do carro', 'RogerioLe??o@hotmail.com', 48022190737),
	(null, 100, null, 'Suzana', 'Cuidar da troca de pe??as do carro', 'SuzanaAparecida@hotmail.com', 48022190637),
    (null, null, null, 'Ricardo', 'Responsavel por cuidar dos clientes', 'Ricardin@bandtec.com', 48022390837),
    (null, null, 100, 'Gabriel', 'Editor de pinturas', 'Gabriel@hotmail.com', 46022190736);
    
insert into reuniao values
	(150, 150, 100, 1, 'Reuni??o com o Jorj??o para decis??o do que ele quer no carro, ideias muito bacana e contrato fechado'),
    (null, 151, 102, 1, 'Reuni??o com para decis??o do que ele deseja na motocicleta, contrato fechado'),
	(null, null, 100, 2, 'Reuni??o para mudan??a de uma moto, contrato n??o feito'),
    (null, 153, 100, 3, 'Reuni??o para modificar bicicleta, contrato aceito'),
    (null, 154, 100, 4, 'Reuni??o para colocar novos pneus em uma moto, contrato feito'),
    (null, 155, 102, 5, 'Reuni??o, cliente n??o quis nada');
    
insert into cliente values 
	(null, 1, 103, 'ADS1B21', 'Rua S??o Camilo 124', 4900),
    (null, 2, null, 'ADS1A21', 'Rua Maestria Lombar 293', 9000),
    (null, 3, 100, 'CCO1A21', 'Estrada das Roselitas 154', 1000),
    (null, 4, 103, 'ADS1B21', 'Rua S??o Camilo 124', 60000);
    
insert into comunidade values
	(250, 3, null, 'LwCompany S??o Paulo', 'SP', 'comunidade de eventos sobre o tema'),
    (null, 1, 202, 'LwCompany Paran??', 'PR', 'eventos de motocicletas e rally'),
	(null, 2, 203, 'LwCompany Amazonas', 'AM', 'eventos para carros com o intuito de acumular dinheiro para ajudar moradores de rua');

-- -----------------
-- OPERA????ES
-- -----------------

-- Analisando quem se tornou ou n??o cliente

select 
	Leads_Jorge.nome as 'Nome', 
	cliente.gastos_cliente as 'Quanto gastou', 
	Leads_Jorge.descricao_mudanca as 'O que queria mudar' 
    from cliente right join Leads_Jorge on cliente.fk_leads = Leads_Jorge.id_leads;


-- Avaliando quanto cada funcionario fez interagindo com o cliente

select Leads_Jorge.nome as 'Cliente', funcionario.nome_funcionario, sum(cliente.gastos_cliente) as 'soma do m??s' from cliente 
	join funcionario on cliente.fk_funcionario = funcionario.id_funcionario 
    join Leads_Jorge on cliente.fk_leads = Leads_Jorge.id_leads group by nome;
    
-- Avaliando m??dia de lucro da empresa

select sum(gastos_cliente) as 'Lucro' from cliente;

-- Analisando quantidade de contratos feitos na semana

select count(id_contrato) as 'N??mero de contratos', funcionario.nome_funcionario from reuniao
	join funcionario on reuniao.fk_funcionario = funcionario.id_funcionario
	group by nome_funcionario;
    
-- Mostrando quais leads est??o acessando alguma comunidade agora

select Leads_Jorge.nome, comunidade.nome_comunidade from comunidade
	right join Leads_Jorge on comunidade.fk_leads = Leads_Jorge.id_leads;


drop database projeto_individual;
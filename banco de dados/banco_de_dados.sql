create database projeto_individual;

use projeto_individual;

create table Cliente_Jorge (
	id_leads int not null auto_increment,
    nome varchar(45),
    email varchar(45),
    tipo_automovel char(1),
    descricao_mudanca varchar(200),
    telefone int,
    primary key(id_leads)
) auto_increment = 1;

create table usuario (
	id_usuario int not null auto_increment,
    termo int,
    nome_usuario varchar(45),
    email_usuario varchar(45),
    telefone_usuario int,
    primary key(id_usuario),
    foreign key(termo)
		references usuario(id_usuario)
) auto_increment = 50;

create table funcionario (
	id_funcionario int not null auto_increment,
    fk_equipe_autopeca int,
    fk_equipe_oficina int,
    nome_funcionario varchar(45),
    funcao_funcionario varchar(45),
    email_funcionario varchar(45),
    cpf_funcionario int,
    primary key(id_funcionario),
    foreign key(fk_equipe_autopeca)
		references funcionario(id_funcionario),
	foreign key(fk_equipe_oficina)
		references funcionario(id_funcionario)
) auto_increment = 100;

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
		references leads(id_leads)
) auto_increment = 150;

create table cliente (
	id_cliente int not null auto_increment,
    fk_leads int not null,
    fk_funcionario int,
    placa_carro_cliente char(7),
    endereco_cliente varchar(100),
    primary key(id_cliente),
    foreign key(fk_leads)
		references leads(id_leads),
	foreign key(fk_funcionario)
		references  funcionario(id_funcionario)
) auto_increment = 200;

create table comunidade (
	id_comunidade int not null auto_increment,
    fk_usuario int,
    fk_cliente int,
    nome_comunidade varchar(45),
    estado_comunidade char(2),
    descricao_comunidade varchar(100),
    primary key(id_comunidade),
    foreign key(fk_usuario)
		references usuario(id_usuario),
	foreign key(fk_cliente)
		references cliente(id_cliente)
) auto_increment = 250;

drop database projeto_individual;



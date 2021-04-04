/********************** DDL - Script de criação ********************/

create database lanchonete;
use lanchonete;

create table cliente ( 
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR (45) NOT NULL, 
    CPF VARCHAR(45) NOT NULL UNIQUE
); 

create table produto (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	descricao VARCHAR (45) NOT NULL,
    valor DOUBLE NOT NULL
);

create table funcionario (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome VARCHAR (45) not null,
	matricula INT NOT NULL UNIQUE 
);

create table pedido (
	id INT NOT NULL,
	idCliente INT NOT NULL,
	idProduto INT NOT NULL,
    idFuncionario INT NOT NULL,
    quantidade INT NOT NULL,

	PRIMARY KEY(id, idCliente, idProduto, idFuncionario),
    
	FOREIGN KEY (idCliente)
		REFERENCES cliente(id),
	FOREIGN KEY (idProduto)
		REFERENCES produto(id),
	FOREIGN KEY (idFuncionario)
		REFERENCES funcionario(id)
);

/********************** DML - Script de inserção ********************/

INSERT INTO cliente (nome, cpf) VALUES
('Letícia Leal','459.174.098.62'),
('Ana Paula', '123.456.789-01'),
('João Garcia', '456.123.789-02');

INSERT INTO produto (descricao, valor) VALUES
('Coxinha de frango', 5.20),
('Pastel de carne', 7.00),
('Empadinha de queijo', 4.50);

INSERT INTO funcionario (nome, matricula) VALUES
('Pietra Moreira', 1235),
('Felipe Cunha', 1725),
('Luiza Silveira', 2310);
select * from pedido;

INSERT INTO pedido (id, idCliente, idProduto, idFuncionario, quantidade) VALUES
(1, 1, 1, 3, 1),
(1, 1, 3, 3, 1),
(2, 3, 2, 2, 2),
(3, 2, 1, 1, 1),
(3, 2, 2, 1, 1),
(3, 2, 3, 1, 1);


/************* Criação da view relatório de pedidos *************/

Create view relatorio_pedido as
select pe.id 'código pedido', pr.descricao , pe.quantidade, pr.valor, c.nome 'cliente', f.nome 'funcionário'
from pedido pe, produto pr, cliente c, funcionario f
where pe.idCliente = c.id
and pe.idProduto = pr.id
and pe.idFuncionario = f.id
order by pe.id;






USE stars_hollow_pages;

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY,
nome VARCHAR(20) NOT NULL,
categoria VARCHAR(6) NOT NULL,
caminhoPersonagem VARCHAR(255) NOT NULL,
CONSTRAINT chkCategoria 
CHECK (categoria in("avatar","boy")));

CREATE TABLE ivyLeague (
idIvy INT PRIMARY KEY,
nome VARCHAR(20) NOT NULL,
caminhoIvy VARCHAR(255) NOT NULL
);

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
primeiroNome VARCHAR(45) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
nomeUsuario VARCHAR(15) NOT NULL UNIQUE,
dtNascimento DATE NOT NULL,
fkPersonagemFav INT NOT NULL,
fkBoyFav INT NOT NULL,
fkIvyLeague INT NOT NULL,
qtdViews INT NOT NULL,
senha VARCHAR(45) NOT NULL,
CONSTRAINT fkFavoritoUsuario
FOREIGN KEY (fkPersonagemFav) REFERENCES personagem (idPersonagem),
CONSTRAINT fkBoyUsuario
FOREIGN KEY (fkBoyFav) REFERENCES personagem (idPersonagem),
CONSTRAINT fkIvyUsuario
FOREIGN KEY (fkIvyLeague) REFERENCES ivyLeague (idIvy)
);

CREATE TABLE resultadoQuizz (
idResposta INT,
fkUsuario INT,
pontuacaoConhecimento INT,
dtQuizz DATE,
CONSTRAINT pkComposta
PRIMARY KEY (idResposta, fkUsuario)
);

DESCRIBE personagem;

INSERT INTO personagem VALUES 
(1, "Lorelai", "avatar", "./assets/imagens/imgs_bd/lorelai.png"),
(2, "Rory", "avatar", "./assets/imagens/imgs_bd/rory.png"),
(3, "Luke", "avatar", "./assets/imagens/imgs_bd/luke.png"),
(4, "Lane", "avatar", "./assets/imagens/imgs_bd/lane.png"),
(5, "Paris", "avatar", "./assets/imagens/imgs_bd/paris.png"),
(6, "Richard", "avatar", "./assets/imagens/imgs_bd/richard.png"),
(7, "Emily", "avatar", "./assets/imagens/imgs_bd/emily.png"),
(8, "Sookie", "avatar", "./assets/imagens/imgs_bd/sookie.png"),
(9, "Kirk", "avatar", "./assets/imagens/imgs_bd/kirk.png"),
(10, "Michel", "avatar", "./assets/imagens/imgs_bd/michel.png"),
(11, "Dean", "boy", "./assets/imagens/imgs_bd/dean.png"),
(12, "Jess", "boy", "./assets/imagens/imgs_bd/jess.png"),
(13, "Logan", "boy", "./assets/imagens/imgs_bd/logan.png");

INSERT INTO ivyLeague VALUES 
(1, "Harvard", "./assets/imagens/imgs_bd/harvard.png"),
(2, "Yale", "./assets/imagens/imgs_bd/yale.png"),
(3, "Princeton", "./assets/imagens/imgs_bd/princeton.png");


describe usuario;

SELECT * FROM resultadoQuizz;

ALTER TABLE resultadoQuizz MODIFY COLUMN dtQuizz DATE DEFAULT (current_date);

ALTER TABLE resultadoQuizz MODIFY COLUMN idResposta INT AUTO_INCREMENT;

ALTER TABLE resultadoQuizz MODIFY COLUMN pontuacaoConhecimento DECIMAL(5,2);

select MAX(pontuacaoConhecimento) FROM resultadoQuizz
where fkUsuario = 1;

select round(avg(pontuacaoConhecimento),2) as "media_pontuacao_quizz" from resultadoQuizz;

select count(idResposta) as "Quantidade de tentativas" from resultadoQuizz where fkUsuario = 1;

select il.nome as nomeIvy, COUNT(*) as qtd_usuarios FROM usuario JOIN ivyLeague as il on usuario.fkIvyLeague = il.idIvy GROUP BY il.nome;

select qtdViews, COUNT(*) as qtd_usuarios from usuario group by qtdViews;

select caminhoPersonagem from personagem join usuario on fkPersonagemFav = idPersonagem WHERE idUsuario = 1;

select caminhoIvy from ivyLeague join usuario on fkIvyLeague = idIvy WHERE idUsuario = 1;

select caminhoPersonagem from personagem join usuario on fkBoyFav = idPersonagem WHERE idUsuario = 1;

select nomeUsuario from usuario where idUsuario = 1;

select dtQuizz, pontuacaoConhecimento from resultadoQuizz join usuario on fkUsuario = idUsuario where idUsuario = 1;

select * from usuario;












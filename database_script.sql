DROP DATABASE movies_db;

CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE Movies (
    movieId int NOT NULL AUTO_INCREMENT,
    nameMovie varchar(255) NOT NULL,
    releaseDate datetime,
    country varchar(255) NOT NULL,
    director varchar(255) NOT NULL,
    PRIMARY KEY (movieId),
    UNIQUE (nameMovie)
); 

CREATE TABLE Actors (
    actorId int NOT NULL AUTO_INCREMENT,
    nameActor varchar(255) NOT NULL,
    surname varchar(255) NOT NULL,
    movieId int,
    PRIMARY KEY (actorId),
    FOREIGN KEY (movieId) REFERENCES Movies(movieId),
    UNIQUE (nameActor, surname)
); 

INSERT INTO Movies (nameMovie, releaseDate, country, director) VALUES ("Avengers EndGame", '2019-04-25 00:00:00.000', "Estados Unidos", "Joss Whedon");
INSERT INTO Movies (nameMovie, releaseDate, country, director) VALUES ("El Secreto de sus Ojos", '2009-08-13 00:00:00.000', "Argentina", "Juan José Campanella");
INSERT INTO Movies (nameMovie, releaseDate, country, director) VALUES ("Contratiempo", '2017-02-23 00:00:00.000', "España", "Oriol Paulo");
INSERT INTO Movies (nameMovie, releaseDate, country, director) VALUES ("El Club de la Pelea", '1999-11-04 00:00:00.000', "Estados Unidos", "David Fincher");

INSERT INTO Actors (nameActor, surname, movieId) VALUES ("Scarlett", "Johansson", "1");
INSERT INTO Actors (nameActor, surname, movieId) VALUES ("Chris", "Hemsworth", "1");
INSERT INTO Actors (nameActor, surname, movieId) VALUES ("Chris", "Evans", "1");
INSERT INTO Actors (nameActor, surname, movieId) VALUES ("Ricardo", "Darín", "2");
INSERT INTO Actors (nameActor, surname, movieId) VALUES ("Mario", "Casas", "3");
INSERT INTO Actors (nameActor, surname, movieId) VALUES ("Brad", "Pitt", "4");

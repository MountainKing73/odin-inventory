#!/usr/bin/env node

const { argv } = require("node:process");
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS band (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	band_name varchar(255) NOT NULL,
	creation_date timestamp NOT NULL,
	CONSTRAINT band_pk PRIMARY KEY (id),
  CONSTRAINT band_name_unique UNIQUE (band_name)
);

CREATE TABLE IF NOT EXISTS media_format (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	format_name varchar(255) NOT NULL,
	creation_date timestamp NOT NULL,
	CONSTRAINT format_pk PRIMARY KEY (id),
  CONSTRAINT format_name_unique UNIQUE (format_name)
);

CREATE TABLE IF NOT EXISTS genre (
	id int4 GENERATED ALWAYS AS IDENTITY( INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1 NO CYCLE) NOT NULL,
	genre_name varchar(255) NOT NULL,
	creation_date timestamp NOT NULL,
	CONSTRAINT genre_pk PRIMARY KEY (id),
  CONSTRAINT genre_name_unique UNIQUE (genre_name)
);

CREATE TABLE IF NOT EXISTS media (
	id int4 GENERATED ALWAYS AS IDENTITY NOT NULL,
	title varchar(255) NOT NULL,
	creation_date timestamp NOT NULL,
	band_id int4 NULL,
	format_id int4 NULL,
	genre_id int4 NULL,
	release_year int4 NULL,
	CONSTRAINT media_pk PRIMARY KEY (id)
);

ALTER TABLE media ADD CONSTRAINT media_band_fk FOREIGN KEY (band_id) REFERENCES band(id);
ALTER TABLE media ADD CONSTRAINT media_format_fk FOREIGN KEY (format_id) REFERENCES media_format(id);
ALTER TABLE media ADD CONSTRAINT media_genre_fk FOREIGN KEY (genre_id) REFERENCES genre(id);

INSERT INTO media_format
(format_name, creation_date)
VALUES('CD', current_timestamp);

INSERT INTO media_format
(format_name, creation_date)
VALUES('VINYL', current_timestamp);

INSERT INTO media_format
(format_name, creation_date)
VALUES('BluRay', current_timestamp);

INSERT INTO media_format
(format_name, creation_date)
VALUES('DVD', current_timestamp);

INSERT INTO media_format
(format_name, creation_date)
VALUES('Digital', current_timestamp);

INSERT INTO genre
(genre_name, creation_date)
VALUES('Metal', current_timestamp);

INSERT INTO genre
(genre_name, creation_date)
VALUES('Rock', current_timestamp);

INSERT INTO genre
(genre_name, creation_date)
VALUES('Pop', current_timestamp);

`;

--
-- PostgreSQL database dump
--

-- Dumped from database version 10.8 (Ubuntu 10.8-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.8 (Ubuntu 10.8-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: clans; Type: TABLE; Schema: public; Owner: lixxir
--

CREATE TABLE public.clans (
    surname character varying(30) NOT NULL
);


ALTER TABLE public.clans OWNER TO lixxir;

--
-- Name: members; Type: TABLE; Schema: public; Owner: lixxir
--

CREATE TABLE public.members (
    name character varying(30) NOT NULL,
    surname character varying(30)
);


ALTER TABLE public.members OWNER TO lixxir;

--
-- Data for Name: clans; Type: TABLE DATA; Schema: public; Owner: lixxir
--

COPY public.clans (surname) FROM stdin;
Stark
Baratheon
Lannister
Tyrell
Arryn
Greyjoy
\.


--
-- Data for Name: members; Type: TABLE DATA; Schema: public; Owner: lixxir
--

COPY public.members (name, surname) FROM stdin;
Arya	Stark
Ned	Stark
\.


--
-- Name: clans clans_pkey; Type: CONSTRAINT; Schema: public; Owner: lixxir
--

ALTER TABLE ONLY public.clans
    ADD CONSTRAINT clans_pkey PRIMARY KEY (surname);


--
-- Name: members members_surname_fkey; Type: FK CONSTRAINT; Schema: public; Owner: lixxir
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_surname_fkey FOREIGN KEY (surname) REFERENCES public.clans(surname) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


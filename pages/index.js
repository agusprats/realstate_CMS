import {useEffect, useState} from "react";
import React from 'react';
import Head from 'next/head';
import usePropiedades from '../hooks/usePropiedades';
import useFiltro from "../hooks/useFiltro";
import axios from 'axios';
import styled from "@emotion/styled";


const Home = () => {
  const [propiedades, guardarPropiedades] = useState([]);
  const [filtradas, guardarFiltradas] = useState([]);

  const {Propiedades} = usePropiedades(filtradas);
  const {categoria, FiltroUI} = useFiltro();


  //llamado a la API
  useEffect(() => {
  if(categoria){
     //Filtrar por categoria
      const filtradas = propiedades.filter(propiedad => propiedad.categoria.id == categoria);
      guardarFiltradas(filtradas);
  } else {
     // Consulta la API y trae todo
      const obtenerPropiedades = async () => {
      const resultado = await axios.get('http://localhost:1337/propiedades')
      guardarPropiedades(resultado.data);
      guardarFiltradas(resultado.data);
    }
    obtenerPropiedades(); 
  }
  }, [categoria])


  return (
    <Contenedor>
      <Head>
        <title>Headless CMS con Strapi y Next.js</title>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" />
      </Head>

      <FiltroUI/>
      <h2>PROPIEDADES</h2>
      <h2>Casas - Departamentos - Emprendimientos</h2>

    <Propiedades/>
    </Contenedor>
  )
}

export default Home;

const Contenedor = styled.div`
margin: 0 auto;
width: 95%;
text-align: center;
font-family: "Lato", sans-serif;
text-decoration: none;
`;

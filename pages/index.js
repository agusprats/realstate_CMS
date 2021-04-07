import {useEffect, useState} from "react";
import React from 'react';
import Head from 'next/head';
import usePropiedades from '../hooks/usePropiedades';
import axios from 'axios';
import styled from "@emotion/styled";

const Contenedor = styled.div`
margin: 0 auto;
width: 95%;
`;

const Home = () => {
  const [propiedades, guardarPropiedades] = useState([]);
  const {Propiedades} = usePropiedades(propiedades);

  //lamado a la API
  useEffect(() => {
    const obtenerPropiedades = async () => {
      const resultado = await axios.get('http://localhost:1337/propiedades')

      guardarPropiedades(resultado.data);
    }
    obtenerPropiedades(); 
  }, [])
  return (
    <Contenedor>
      <Head>
        <title>Headless CMS con Strapi y Next.js</title>
        
      </Head>
    <Propiedades/>
    </Contenedor>
  )
}

export default Home;

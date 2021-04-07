import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';



const useFiltro = () => {

    //state local del hook
    const [categorias, guardarCategorias] = useState([]);
    const [categoria, guardarCategoria] = useState('');

    useEffect(() => {
        const obtenerCategorias = async() => {
        const resultado = await axios.get('http://localhost:1337/categorias');
        guardarCategorias(resultado.data);
        }
        obtenerCategorias();
    }, []);

    const FiltroUI = () => (
        <Formulario>
            <Select
                onChange={e => guardarCategoria(e.target.value)}
                value={categoria}>
            <option value="">--- FITRAR ---</option>
            {categorias.map(option => (
                <option
                key={option.id}
                value={option.id}
                >
                    {option.nombre}
                </option>
            ))}
            </Select>
        </Formulario>
    )

    return {
        categoria,
        FiltroUI
    }
}
export default useFiltro;

const Formulario = styled.form`
    width: 100%;
    display: flex;
    margin-top: 2rem;
    border: 1px solid #e1e1e1;
    
`;

const Select = styled.select`
flex: 1;
padding: 1rem;
border: none;
text-align: center;
font-family: 'Lato', sans-serif;
appearance: none;
background-color: whitesmoke;
`;
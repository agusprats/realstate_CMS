import React from "react";
import styled from "@emotion/styled";

const usePropiedades = (propiedades) => {

    const Propiedades = () => (
        <Grid>
        {propiedades.map(propiedad => (
            <Card>
                <img src={`http://localhost:1337/${propiedad.imagen[0].url}`}/>
                <div>
                    <h3>{propiedad.nombre}</h3>
                    <ul>
                        <li>Ambientes: {propiedad.ambientes}</li>
                        <li>Baños: {propiedad.banios}</li>
                        <li>Descripcion: {propiedad.descripcion}</li>
                    </ul>
                </div>
            </Card>
        ))}
        </Grid>
    )
    return {

        Propiedades
    }
}

export default usePropiedades;

const Grid = styled.div`
    @media(min-width: 480px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    row-gap: 2rem;
    column-gap:2rem;
}
@media(min-width: 768px){
    grid-template-columns: repeat(3,1fr) ;
}
`;

const Card = styled.div`
border: 1px solid #B5B5B5;
background-color: #F5F5F5;

img{
    max-width: 100%;
}
`;
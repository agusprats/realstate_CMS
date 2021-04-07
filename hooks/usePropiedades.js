import React from "react";
import styled from "@emotion/styled";

const usePropiedades = (propiedades) => {

    const Propiedades = () => (
        <Grid>
        {propiedades.map(propiedad => (
            <Card
            key={propiedad.id}
            >
                <img src={`http://localhost:1337${propiedad.imagen[0].url}`}/>
                <Contenido>
                    <h3>{propiedad.nombre}</h3>
                    <h3>{propiedad.descripcion}</h3>
                    <ul>
                        <li>
                            <img src="assets/img/1.png"/>    
                        </li>
                        <li>
                            <img src="assets/img/escala.png"/>
                            <p>{propiedad.ambientes}</p>
                        </li>
                        <li>
                            <img src="assets/img/banera.png"/>
                            <p>{propiedad.banios}</p>
                        </li>
                        
                    </ul>
                </Contenido>
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

const Contenido = styled.div`
padding: 1 rem;

h3{
    margin: 1rem 0 2rem 0;
    font-size: 1.4rem;
    font-family: 'Lato', sans-serif;
}

ul{
    list-style: none;
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
}
ul li{
    display: flex;

}

ul li img {
    margin-right:1rem;
    margin-left:1rem;
    width:30px;
    height: 30px;  
}
ul li p{
    margin-right: 1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
}

`;
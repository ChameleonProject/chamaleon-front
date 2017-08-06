import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid } from 'react-bootstrap'
import { PieChart, Pie, Sector, Cell } from 'recharts'
import Header from '../Header'
import Footer from '../Footer'

const Title = styled.div`
    text-align: center;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    display: inline-block;
    font-size: 23px;
    padding: 1px 16px;
    margin-bottom: 10px;
`
const About = styled.div`
    text-align: center;
    padding-bottom: 20px;
`
const AboutPg = ()=>{
    return(
        <div>
            <Header />
            <About>
                <Grid>
                    <Title>Sobre</Title>
                    <p>O Chameleon Project foi  uma solução criada para a prevenção da pedofilia analisando grupos ou perfis específicos no Facebook, apontando se o perfil ou perfis são falsos ou verdadeiros e com a obtenção destas informações podemos alimentar a base de dados já existente da polícia, para um maior cruzamento de dados e desta forma presidiar investigações policiais e assim prevenir a ação destes criminosos na rede.</p>
                </Grid>
            </About>
            <Footer />
        </div>

    )
}
                
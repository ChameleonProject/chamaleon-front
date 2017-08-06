import React from 'react'
import styled from 'styled-components'
import { Grid } from 'react-bootstrap'
import { PieChart, Pie, Sector, Cell } from 'recharts'
import DefaultImg from './defaultProfile.jpg'

import Header from '../Header'
import Footer from '../Footer'

const Panel = styled.div`
    padding: 4px;
    border: 1px solid;
    margin-bottom: 10px;
    border: 1px solid rgba(132, 130, 130, 0.56);
    box-shadow: 0 2px 15px -2px #424242;
    border-radius: 4px;
    .name{
        margin-left: 25px;
        font-size: 20px;
    }
    .recharts-wrapper{
        margin: 0 auto;
    }
`
const UserWrapper = styled.div`
    padding: 20px 0;
`
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
const ProfilePic = styled.div`
    width: 180px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    img {
        max-width:100%;
    }
`
const PieWrapper = styled.div`
    position: relative;
    padding: 20px 0;
`
const Chance = styled.div`
    font-weight: bolder;
    text-align: center;
    font-size: 40px;
    color: ${ props => props.color};
`

const User = ({chance}) => {
    const isFake = chance > 50;
    const color = isFake ? "#ef5350" : "#29895a"
    const data = [{name: 'Group A', value: 100 - chance, color: "#fff"}
                , {name: 'Group B', value: chance, color: color }]

    return(
        <Grid fluid>
            <Panel>
                <div className="name">Julio</div>
                <PieWrapper>
                    <ProfilePic>
                        <img src={ DefaultImg } alt=""/>
                    </ProfilePic>
                    <PieChart width={220} height={220} >
                        <Pie
                            data={data} 
                            cx={110} 
                            cy={110} 
                            innerRadius={90}
                            outerRadius={110} 
                            fill="#8884d8"
                        >
                            {
                                data.map((entry, index) => <Cell fill={entry.color}/>)
                            }
                        </Pie>
                    </PieChart>
                </PieWrapper>
                <Chance color={color}>
                    { data[1].value }%
                </Chance>
            </Panel>
        </Grid>
    )    
}

const Home = () => {
    return(
        <div>
            <Header />
            <UserWrapper>
                <User chance={80}></User>
                <User chance={47}></User>
                <User chance={99}></User>
                <User chance={36}></User>
            </UserWrapper>
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

export default Home
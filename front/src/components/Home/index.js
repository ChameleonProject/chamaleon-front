import React, { Component } from 'react'
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
const GroupInput = styled.div`
    padding: 30px 0;
    text-align: center;
`
const Input = styled.input`
    border: none;
    border-bottom: 2px solid;
    font-size: 20px;
    text-align:center;
    display: block;
    margin: 0 auto;
`
const Send = styled.div`
    margin-top: 20px;
    background-color: #29895a;
    color: #fff;
    font-size: 20px;
    padding: 10px;
    display: inline-block;
`



const User = ({ payload }) => {
    console.log(payload);
    const isFake = payload.chance > 50;
    const color = isFake ? "#ef5350" : "#29895a"
    const data = [{name: 'Group A', value: 100 - payload.chance, color: "#fff"}
                , {name: 'Group B', value: payload.chance, color: color }]

    return(
        <Grid fluid>
            <Panel>
                <div className="name">{ payload.nome }</div>
                <PieWrapper>
                    <ProfilePic>
                        <img src={ payload.img } alt=""/>
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

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {showUsers:false}
    }
    payload(){
        return [{"chance": 86,
            "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/20108554_103297047013886_2705662436535651492_n.jpg?oh=5632b564a5a3d075ef1b9c885d843e1f&oe=59EE4BFB",
            "nome": "Tayrone Bissoli"
            },{"chance": 68,
                "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/20108556_103574546979539_2319922592106069411_n.jpg?oh=ce96e4e85187fc32edfdf98f143e8c5c&oe=59FEE5ED",
                "nome": "Paulo Rondellas"
            },{"chance": 99,
                "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/18057005_105464730016515_6591299766039743455_n.jpg?oh=7a0a4b2377c110388f68c5fcf2ff514c&oe=5A366125",
                "nome": "Henrique Silva"
            },{"chance": 38,
                "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/20108144_113708102603504_8821946248250198573_n.jpg?oh=f4209620014d7ed2141ab6f2a18276f9&oe=59EC3149",
                "nome": "Marta Cristina"
            },{"chance": 18,
                "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/20264708_188688308335450_6856303791140943541_n.jpg?oh=96d9a8ebbd91737032d99efdc5ed5777&oe=59FD11B7",
                "nome": "Ruan Pereira"
            },
            {"chance": 63,    "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/20480016_165021860725409_3428843167835487617_n.jpg?oh=0c2d932813fd13ccc58bef5509239330&oe=5A309CC1",    "nome": "Alexia Nando"},{"chance": 58,    "img": "https://scontent-gru2-1.xx.fbcdn.net/v/t1.0-9/18739921_219533928550775_3953631875073545303_n.jpg?oh=72c28ee4a1392df4d357bf5645282175&oe=59F275DC",    "nome": "Pedro Manuel"}
            ]
    }  
    showProfiles(){
        this.setState({showUsers:true})
    }
    render(){
        return(
            <div>
                <Header />
                { this.state.showUsers || 
                    <GroupInput>
                        <Input placeholder="insira a url do perfil"/>
                        <Send onClick={ () => this.showProfiles() }>Ver grupo</Send>
                    </GroupInput>
                }
                { this.state.showUsers && 
                    <div>
                        <h3 className="text-center">{ this.payload().length } encontrados</h3>
                        <UserWrapper>
                            { this.payload().map( (user) => {
                                return(
                                    <User payload={user}></User>
                                )
                            } ) }
                        </UserWrapper>
                    </div>
                }
                <Footer />
            </div>
        )
    }
}

export default Home
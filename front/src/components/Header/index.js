import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'

const Img = styled.img`
    max-width: 100%;
`
const TopHead = styled.div`
    background-color: #CDDC39;
    padding: 30px 20px;
    text-align: center;
`
const BotHead = styled.div`
    background-color: #AFB42B;
    color: #fff;
`
const Menu = styled.div`
    margin: 0 20px;
`

const Item = styled.div`
    display: inline-block;
    font-size: 30px;
    padding: 20px 13px;
`


const Header = () => {
    return(
        <div>
            <TopHead>
                <Img src={logo} alt=""/> 
            </TopHead>
            <BotHead>
                <Menu>
                    <Item>Reais</Item>
                    <Item>Fakes</Item>
                    <Item>Perfis</Item>
                </Menu>
            </BotHead>
        </div>
    )
}

export default Header;
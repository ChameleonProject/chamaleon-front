import React from 'react'
import styled from 'styled-components'
import {Row, Col, Grid} from 'react-bootstrap'
import Header from '../Header'

const Wrapper = styled.div`

`
const MailRow = styled.div`
    background-color: #CDDC39;
    padding: 20px 0;
`
const Input = styled.input`
    height:33px;
    background: none;
    border: none;
    border-bottom: 2px solid #29895a;
    padding: 19px 0;
    padding-left: 13px;
    font-size: 23px;
    display: block;
    width: 100%;
`
const Send = styled.button`
    width: 100%;
    background-color: #29895a;
    border: none;
    padding: 8px 0;
    color: #fff;
    font-size: 18px;
`

const Footer = () => {
    return(
        <Wrapper>
            <MailRow>
                <Grid>
                    <Row>
                        <Col xs={8}>
                            <Input placeholder="E-mail" type="text"/>
                        </Col>
                        <Col xs={4}>
                            <Send>Subscribe</Send>
                        </Col>
                    </Row>
                </Grid>
            </MailRow>
        </Wrapper>
    )
}

export default Footer
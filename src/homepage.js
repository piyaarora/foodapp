import React, { Component ,useState } from 'react'
import './homepage.css'
import { Container, Row, Col,Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,Jumbotron} from 'reactstrap';




    const Homepage = (props) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
      
    return (
      <>
       <Container className="image" fluid>
        <Row>
        <Col>

                <Navbar color="" light expand="md" style={{marginTop:'0.5em'}} >
                    <Col xs="5">
                         <NavbarBrand className="header" href="/"><p style={{color:'#fff',float:'left'}}>FOOD.<p style={{color:'#ffc107',float:'right'}}>LOGO</p></p></NavbarBrand>
                    </Col>
                    
                    <NavbarToggler onClick={toggle} />

                        <Collapse isOpen={isOpen} navbar>
                    
                        <Nav className="mr-auto" navbar>
                            <Col sm="4">   
                            <NavItem>
                            <NavLink href="/aboutus/"><p style={{color:'#fff'}}>ABOUT</p></NavLink>
                            </NavItem>
                            </Col>
                            <Col sm="4">
                            <NavItem>
                                <NavLink href="/ourfood/"><p style={{color:'#fff'}}>OUR FOOD</p></NavLink>
                            </NavItem>
                            </Col>
                            <Col sm ="4">
                            <NavItem>
                                <NavLink href="/plans/"><p style={{color:'#fff'}}>PLANS</p></NavLink>
                            </NavItem>
                            </Col>
                            <Col sm="4">
                            <Button color="warning"style={{borderRadius:'25px'}}>CONTACT US</Button>{' '}
                            </Col>
                        </Nav>
                    </Collapse>
                    
                 </Navbar>
            </Col>
        </Row>

        <Row>
            <Col sm="6">
                <Jumbotron style={{background:'#fff',marginTop:'4em',marginLeft:'2em',lineHeight:'2'}}>
                    <Col sm="8">
                        <h2 className="display-6">Have no time to prepare <a style={{color:'#ffc107'}}>food</a> ?</h2>
                    </Col>
                    <Col xs="12">
                        <p className="my-2" style={{color:'#aaa'}}>Choose one of our plans, enter delivery time and enjoy delicious food without leaving your home.</p>
                        <Button color="warning" style={{borderRadius:'25px', width:'10em'}}>Order Food</Button>{' '}
                        {/* <Col sm="12"> fa icons </Col> */}
                    </Col>
                </Jumbotron>
            </Col>
        </Row>
      </Container>
     </>
    )
  }


export default Homepage

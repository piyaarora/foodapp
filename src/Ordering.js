import React, { Component } from 'react'
import { Container, Row, Col,Card, Button, CardTitle, CardText,CardBody,CardImg} from 'reactstrap';

import { connect } from 'react-redux';
import { addToCart } from './components/actions/cartActions';
import Cart from './cart';



class Ordering extends Component {
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

  render() {
    let itemList = this.props.items.map(item=>{
    
    return (
        <Card key={item.id}>
        <CardBody onClick={()=>{this.handleClick(item.id)}}>

        <Row className="no-gutters">
        <Col md="3">
            <CardImg
            top
            width="100%"
            src={item.image}
            alt="Card image cap"
            />
        </Col>
        <Col md="6">
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            </CardBody>
        </Col>
        <Col md="3">
        <CardBody>
            <CardTitle>$ {item.price}</CardTitle>
            </CardBody>
      
        </Col>
        </Row>
    </CardBody>
    </Card>
     
    )
  }
    )
return(
    <Container>
                <Row>
                    {/****************** box1******************* */}
                        
                    <Col sm="5">
                    {itemList}
                    </Col>                       
                    {/* <CardBody>
                        <Row className="no-gutters">
                        <Col md="3">
                            <CardImg
                            top
                            width="100%"
                            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                            alt="Card image cap"
                            />
                        </Col>
                        <Col md="7">
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            </CardBody>
                        </Col>
                        <Col md="2">
                        <CardBody>
                            <CardTitle>$ 34</CardTitle>
                            </CardBody>
                      
                        </Col>
                        </Row>
                    </CardBody>

           
                    <CardBody>
                        <Row className="no-gutters">
                        <Col md="3">
                            <CardImg
                            top
                            width="100%"
                            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                            alt="Card image cap"
                            />
                        </Col>
                        <Col md="7">
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            </CardBody>
                        </Col>
                        <Col md="2">
                        <CardBody>
                            <CardTitle>$ 34</CardTitle>
                            </CardBody>
                      
                        </Col>
                        </Row>
                    </CardBody>

                    <CardBody>
                        <Row className="no-gutters">
                        <Col md="3">
                            <CardImg
                            top
                            width="100%"
                            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                            alt="Card image cap"
                            />
                        </Col>
                        <Col md="7">
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            </CardBody>
                        </Col>
                        <Col md="2">
                        <CardBody>
                            <CardTitle>$ 34</CardTitle>
                            </CardBody>
                      
                        </Col>
                        </Row>
                    </CardBody> */}
                    {/* ****************box 1 end************************* */}

            {/* *****************box2************************** */}
                   
      <Col sm="2">
        <CardBody>
        <Button color="warning" >Add to Cart >></Button>{' '}
        <Button color="warning">Remove from cart </Button>{' '}

        </CardBody>
      </Col>
                    {/* ****************box 2 end************************* */}
          
            {/* *****************box 3************************** */}


      <Col sm="5">
            <Cart />
            </Col>
                    {/* ****************box 2 end************************* */}

    </Row>
    </Container>

 )
}
}
const mapStateToProps = (state)=>{
    return {
        items: state.items
         }
    }
    const mapDispatchToProps= (dispatch)=>{
    
        return{
            addToCart: (id)=>{dispatch(addToCart(id))}
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Ordering)


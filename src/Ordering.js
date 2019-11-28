import React, { Component } from 'react'
import { Container, Row, Col,Card, Button, CardTitle, CardText,CardBody,CardImg} from 'reactstrap';
import './ordering.css';
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
        <Card key={item.id} >
        <CardBody onClick={()=>{this.handleClick(item.id)}} className="hovering">

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
    <Container className="container">
                <Row>
                    {/****************** box1******************* */}
                        
                    <Col sm="5">
                    {itemList}
                    </Col>                       
                    
                    {/* ****************box 1 end************************* */}

            {/* *****************box2************************** */}
                   
      <Col sm="2">
        <CardBody>
        <Button color="warning" style={{marginTop:'10em',marginBottom:'2em',borderRadius:'25px', width:'10em',cursor:'pointer'}} >Add to Cart >></Button>{' '}
        <Button color="warning" style={{marginBottom:'5em',borderRadius:'25px',width:'10em',borderRadius:'25px',cursor:'pointer'}}>Remove from cart </Button>{' '}

        </CardBody>
      </Col>
                    {/* ****************box 2 end************************* */}
          
            {/* *****************box 3************************** */}


      <Col sm="5">
            <Cart />
            </Col>
                    {/* ****************box 3 end************************* */}

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


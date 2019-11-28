import React, { Component } from 'react'
import {  Row, Col,Card, CardTitle,CardBody,CardImg,Button} from 'reactstrap';
import { connect } from 'react-redux';
import { removeItem,addQuantity,subtractQuantity } from './components/actions/cartActions';
import Recipt from './receipt';
import './ordering.css'


class Cart extends Component {

    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
      
    render() {
        let addedItems = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return(
                    <Card>    
                       
                        <CardBody key={item.id}>
                        <Row className="no-gutters">
                        
                            <Col md="3" key>
                             <CardImg
                            top
                            width="100%"
                            src={item.image}
                            alt="Card image cap"
                            ></CardImg>                            
                        </Col>
                        <Col md="4">
                            <CardBody>
                            <CardTitle>{item.name}</CardTitle>
                            </CardBody>
                        </Col>
                        <Col md="5">
                        <CardBody>
                            <CardTitle>$ {item.price} for {item.quantity}</CardTitle>
                            <div style={{color:'#ffc107',float:'left',marginLeft:'1em', cursor:'pointer'}} onClick={()=>{this.handleAddQuantity(item.id)}}>+</div>
                            <div style={{color:'#ffc107',float:'left',marginLeft:'1em',cursor:'pointer'}} onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</div>
                            <div  style={{color:'#ffc107',float:'left',marginLeft:'1em',cursor:'pointer'}} onClick={()=>{this.handleRemove(item.id)}}>del</div>
                            </CardBody>
                            </Col>
                        </Row>
                    </CardBody>

                         
        </Card>
     )
    })
):

 (
     <div style={{width:'30em',height:'30em',background:'#eee'}}>
    <p style={{paddingTop:'15em',paddingLeft:'10em'}}>Your Cart is empty</p>
    </div>
 )


        return (
            <>
            {addedItems}   
            <Recipt />
            
            </>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)




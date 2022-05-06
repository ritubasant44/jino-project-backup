import React from "react";
import "../../template/Product/Product.css";
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Button } from "reactstrap";



export default function ProductCard(product) {

  return (
    <React.Fragment>
       
      <Card style={{"width": "18rem", "marginBottom": "20px", "height": "300px"}}>
          <Card.Body className="list_card">
              <Card.Title>{product.Appliances}</Card.Title>
              <Card.Title>Price: {product.Price}</Card.Title>
              <Card.Text>Description: {product.HeaderTitle}</Card.Text>
              <Link to={`Product/${product.id}`}>
              <Button color="primary">Shop Now</Button>
              </Link>
          </Card.Body>
      </Card>
     
    </React.Fragment>
  );
}

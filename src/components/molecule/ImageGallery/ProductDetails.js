import React, { useState, useEffect } from "react";
import "../../template/Product/Product.css";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Button } from "reactstrap";
import {useParams} from 'react-router';
import axios from "axios";
// import ProductList from './ProductList';

export default function ProductDetail(props) {

    const {id} = useParams();
    
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] =useState('')

    useEffect(() => {
        const getSingleProductData = async () => {
          const {data} = await axios.get(`http://localhost:9090/getproducts/${id}`);
          setTitle(data.Appliances);
          console.log(data.Appliances);
          setPrice(data.Price);
          setDescription(data.HeaderTitle);
        };
        getSingleProductData();
      }, []);
  return (
    <React.Fragment>
      <Card style={{"width": "auto", "height": "300px", "marginTop": "30px"}}>
          <Card.Body>
              <Card.Title>Name: {title}</Card.Title>
              <Card.Title>Price: {price}</Card.Title>
              <Card.Text>Description: {description}</Card.Text>
              <Link to={`Cart/${id}`}>
              <Button color="primary">Add to cart</Button>
              </Link>
          </Card.Body>
      </Card>
    </React.Fragment>
  );
}
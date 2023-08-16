import React from "react";
import Card from 'react-bootstrap/Card';
import './RecipeCard.css'

const RecipeCard = (props) => {
    
    return (

    <Card style={{width: 200, height:300}}>
      <Card.Img variant="top" src={props.image} className="card-img" />
      <Card.Body className="title-card"> 
        <Card.Title >{props.name} </Card.Title>
      </Card.Body>
    </Card>
    )
}

export default RecipeCard;
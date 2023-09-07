import React from "react";
import Card from 'react-bootstrap/Card';
import './RecipeCard.css'

const RecipeCard = (props) => {
    const { data } = props;
    const { name, img_url } = data;

    return (
      <Card style={{ width: 200, height: 300 }}>
        <Card.Img
          variant="top"
          src={img_url}
          className="card-img"
        />
        <Card.Body className="title-card">
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    );
};

export default RecipeCard;
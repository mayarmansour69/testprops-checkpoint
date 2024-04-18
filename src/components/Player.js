import React from 'react'
import Card from 'react-bootstrap/Card';

const Player = ({name,team,nationality,jerseyNumber,age,imageUrl}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Team : {team} <br/>
        Nationality : {nationality}<br/>
        JerseyNumber : {jerseyNumber}<br/>
        Age : {age}<br/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
};

Player.defaulrProps ={
    name :"player name",
    team :"team name" ,
    nationality :"country" ,
    jerseyNumber :0 ,
    age :0 ,
    imageUrl :""
}

export default Player;

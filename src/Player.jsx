import React from 'react';
import Card from 'react-bootstrap/Card';
import './App.css'


const Player = ({name , team, nationality, jerseyNumber, age, playerImage}) => {
  return (
    <Card className='container'>
      <Card.Img  className='image' src={playerImage}  alt={name}/>
      <Card.Body className='info'>
        <Card.Title className='playerName' >{name}</Card.Title>
        <Card.Text className='otherInfo'>
          Team: {team} <br />
          Nationality: {nationality} <br />
          Jersey Number: {jerseyNumber} <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown Nationality',
  jerseyNumber: 0,
  age: 0,
  imageUrl: '',
};

export default Player;
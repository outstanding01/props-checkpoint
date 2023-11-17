import React from 'react';
import Player from './player';
import playersData from './players'
const PlayerList = () => {
  
  return (
    <div className='fstyle'>
        {playersData.map((player, index) => (<Player key={index} {...player} />
        ))}
    </div>
  );
};

export default PlayerList;
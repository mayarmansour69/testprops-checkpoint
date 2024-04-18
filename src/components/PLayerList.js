import React from 'react'
import Player from './Player'
import playersData from './players'

function PLayerList() {
  return (
    <div>
      {playersData.map((player,index)=>(
      <Player key ={index} {...player}/>
      ))}
    </div>
  )
}

export default PLayerList

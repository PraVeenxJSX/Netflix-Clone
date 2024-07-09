import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import Cards_data from '../../assets/cards/Cards_data'




const TitleCards = ({title, category}) => {
  const cardsRef = useRef();

const handlewheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollleft += event.delataY;
}

useEffect(()=>{
  cardsRef.current.addEventListener('wheel', handlewheel);
},[])

  return (
    <div className='title-cards'>
    <h2>{title || "Popular on Netflix"}</h2>
    <div className="card-list" ref={cardsRef}>
      {Cards_data.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.name} />
          <p>{card.name}</p>
        </div>
      ))}
    </div>
</div>


  
  )
}

export default TitleCards
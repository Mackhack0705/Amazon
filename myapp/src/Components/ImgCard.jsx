import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/cards.css';
import Nbar from './Nbar';

const ImgCard = (val, {setSelectedMode}) => {
  const [Count,setCount] = useState(0);
  const handleadd = (mode) => {
    setCount(Count + 1);
    setSelectedMode(mode);
  }
  const handleremove = (mode) => {
    if(Count < 0) {
      alert("No more Products are available");
    }
    else {
      setCount(Count-1);
      setSelectedMode(mode);
    }
  }
  return (
    <div className="productsCard">
    <div className='box'>
    <Card className='card' style={{ width: '18rem',height: '38rem'}}>
      <Card.Img className='img' variant="top" src={val.imgurl} />
      <Card.Body>
        <Card.Title className='title'>{val.title}</Card.Title>
        <Card.Text className='rate price'>{val.rate}⭐⭐⭐⭐⭐{val.count}</Card.Text>
        <Card.Text className='price'>
        <sup className='sup'>$</sup>
        {val.price}
        </Card.Text>
        <Card.Text className='txt price'>Ships to india</Card.Text>
        <Button variant="primary" className='button' id='atc' onClick={handleadd}>Add to Cart</Button>
        <Button variant="primary" className='button' id='bn' onClick={handleremove}>Buy Now</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default ImgCard

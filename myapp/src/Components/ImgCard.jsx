import React from 'react'
import Card from 'react-bootstrap/Card';
import '../style/cards.css';

const ImgCard = (val) => {
  return (
    <div className="productsCard">
    <div className='box'>
    <Card style={{ width: '18rem',height: '28rem',margin: '30px',paddingTop: '20px',paddingLeft: '15px'}}>
      <Card.Img className='img' variant="top" src={val.imgurl} style={{width: '16rem', height: '15rem'}}/>
      <Card.Body>
        <Card.Title style={{marginTop: '40px',marginLeft: '10px'}}>{val.title}</Card.Title>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default ImgCard

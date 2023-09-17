import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/cards.css';

const ImgCard = (val) => {

  return (
    <>
      <div className="productsCard">
        <Card className='card'>
          <div className="pro-box">
            <div className="sub">
              <Card.Img className='img' variant="top" src={val.imgurl} />
            </div>
            <div className="sub">
              <Card.Body className='cardbody'>
                <Card.Title className='title'>{val.title}</Card.Title>
                <Card.Text className='rate price'>{val.rate}⭐⭐⭐⭐⭐{val.count}</Card.Text>
                <Card.Text className='price'>
                  <sup className='sup'>$ </sup>
                  {val.price}
                </Card.Text>
                <Card.Text className='txt price'>Ships to india</Card.Text>
                <Button variant="primary" className='button' id='atc' onClick={val.onButtonClick1}>Add to Cart</Button>
                <Button variant="primary" className='button' id='bn' onClick={val.onButtonClick2}>Buy Now</Button>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default ImgCard

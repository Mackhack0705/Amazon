import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HomeCarousel = () => {
  return (
    <div>
    <Carousel style={{zIndex:'0', width:'100%'}}>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/July/Apay/Deals-Unrec-PC-3000_2._CB598748121_.jpg" alt="" width="100%" height="100%"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Sept/Onecard/Shoes/Shoes_3000._CB595761837_.jpg" alt="" width="100%" height="100%"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/UNREC_Home_Fragrance_PC_3000x1200._CB595833664_.jpg" alt="" width="100%" height="100%"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/PC_Hero_2x_Rec_OT_APAY._CB598759972_.jpg" alt="" width="100%" height="100%"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg" alt="" width="100%" height="100%"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" alt="" width="100%" height="100%"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Sept/HDFC/Lugg/3000_lugg._CB595761141_.jpg" alt="" width="100%" height="100%"/>
      </Carousel.Item>
    </Carousel>
      
    </div>
  )
}

export default HomeCarousel

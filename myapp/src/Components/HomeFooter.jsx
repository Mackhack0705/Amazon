import React from 'react'
import '../style/homefooter.css'

function HomeFooter() {
  return (
    <div className='footer'>
      <table style={{width:800}}>
        <tr>
            <th><p>AbeBooks</p></th>
            <th><p>Amazon Web Services</p></th>
            <th><p>Audible</p></th>
            <th><p>DPReview</p></th>
            <th><p>IMDB</p></th>
        </tr>
        <tr>
            <td><p className='para'>Books,art<br/>& collectibles</p> </td>
            <td><p className='para'>Scalable Cloud <br />Computing Services</p></td>
            <td><p className='para'>Download <br />Audio Books</p></td>
            <td><p className='para'>Digital <br />Photography</p></td>
            <td><p className='para'>Movies, TV <br />Celebrities</p></td>
        </tr>
      </table>
      <table style={{width:800}}>
        <tr>
            <th><p>Shopbop</p></th>
            <th><p>Amazon Business</p></th>
            <th><p>Prime Now</p></th>
            <th><p>Amazon Prime Music</p></th>
        </tr>
        <tr>
            <td><p className='para'>Designer <br />Fashion Brands</p> </td>
            <td><p className='para'>Everything For<br />Your Business</p></td>
            <td><p className='para'>2-Hour Delivery <br />On Everyday Items</p></td>
            <td><p className='para'>100 million songs, ad-free <br />Over 15 million podcast episodes</p></td>
        </tr>
      </table>
    </div>
  )
}

export default HomeFooter

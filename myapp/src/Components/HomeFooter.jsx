import React from 'react'
import '../style/homefooter.css'

function HomeFooter() {
  return (
    <div className='footer'>
      <table style={{width:800}} className='table1'>
        <tr className='row1'>
            <td><p className='para'>AbeBooks</p></td>
            <td><p className='para'>Amazon Web Services</p></td>
            <td><p className='para'>Audible</p></td>
            <td><p className='para'>DPReview</p></td>
            <td><p className='para'>IMDB</p></td>
        </tr>
        <tr>
            <td><p className='para'>Books,art<br/>& collectibles</p> </td>
            <td><p className='para'>Scalable Cloud <br />Computing Services</p></td>
            <td><p className='para'>Download <br />Audio Books</p></td>
            <td><p className='para'>Digital <br />Photography</p></td>
            <td><p className='para'>Movies, TV <br />Celebrities</p></td>
        </tr>
      </table>
      <table style={{width:800}} className='table2'>
        <tr className='row1'>
            <td><p className='para'>Shopbop</p></td>
            <td className='td2'><p className='para'>Amazon Business</p></td>
            <td><p className='para'>Prime Now</p></td>
            <td><p className='para'>Amazon Prime Music</p></td>
        </tr>
        <tr>
            <td><p className='para'>Designer <br />Fashion Brands</p> </td>
            <td className='td2'><p className='para'>Everything For<br />Your Business</p></td>
            <td><p className='para'>2-Hour Delivery <br />On Everyday Items</p></td>
            <td><p className='para'>100 million songs, ad-free <br />Over 15 million podcast episodes</p></td>
        </tr>
      </table>
      <div className="rights">
        <a href="#">
          <p>Conditions of Use & Sale  Privacy Notice Interest-Based Ads</p>
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </a>
      </div>
    </div>
  )
}

export default HomeFooter

import React from 'react'
import '../style/about.css'
const About = () => {
  return (
    <div>
      <div className="help"><a href="#">Back to top</a></div>
      <div className="about">
        <ul>
          <li className='heading'>Get to know Us</li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press Releases</a></li>
          <li><a href="#">Amazon Science</a></li>
        </ul>
        <ul>
          <li className='heading'>Connect with Us</li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
        <ul>
          <li className='heading'>Make Money with Us</li>
          <li><a href="#">Sell on Amazon</a></li>
          <li><a href="#">Sell under Amazon Accelerator</a></li>
          <li><a href="#">Protect and Build Your Brand</a></li>
          <li><a href="#">Amazon Global selling</a></li>
          <li><a href="#">Become an Affiliate</a></li>
          <li><a href="#">Fulfilment by Amazon</a></li>
          <li><a href="#">Advertise Your Products</a></li>
          <li><a href="#">Amazon Pay on Merchants</a></li>
        </ul>
        <ul>
          <li className='heading'>Lets Us help you</li>
          <li><a href="#">COVID-19 and Amazon</a></li>
          <li><a href="#">Your Account</a></li>
          <li><a href="#">Returns and Centre</a></li>
          <li><a href="#">100% Purchase Protection</a></li>
          <li><a href="#">Amazon App Download</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
      <div className="branches">
        <hr />
        <div className="box">
          <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="brand logo" />
          <select name="" id="lang">
            <option value="">English</option>
            <option value="">हिंदी </option>
          </select>
          <div className="loc">
            <a href="#">Australia</a>
            <a href="#">Brazil</a>
            <a href="#">Canda</a>
            <a href="#">China</a>
            <a href="#">France</a>
            <a href="#">Germany</a>
            <a href="#">Italy</a>
            <a href="#">Japan</a>
            <a href="#">Mexico</a>
            <a href="#">Netherlands</a>
            <a href="#">Poland</a>
            <a href="#">Singapore</a>
            <a href="#">Spain</a>
            <a href="#">Turkey</a>
            <a href="#">United Arab Emirates</a>
            <a href="#">United Kingdom</a>
            <a href="#">United States</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

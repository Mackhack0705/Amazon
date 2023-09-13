import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from 'react'
import '../style/nbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import indianflag from '../assets/png/india.jpg'
import cart from '../assets/png/cart.png'

const Nbar = ({SelectedMode}) => {
 
  return (
    <div>
      <div className="navBar">
        <div className="tabs" id='brand'>
          <a href="#">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            <span>.in</span>
          </a>
        </div>
        <div className="tabs" id='tab1'>
          <a href="#">
            <FontAwesomeIcon icon={faLocationDot} className='location'/>
            <div>
            <p className='firstPara'>Hello</p>
            <p className='secondPara'>Select your address</p>
            </div>
          </a>
        </div>
        <div className='searchBar'>
          <select name="" id="">
            <option value="">All Categories</option>
            <option value="">Alexa skills</option>
            <option value="">Amazon Devices</option>
            <option value="">Amazon Fashion</option>
            <option value="">Amazon Fresh</option>
          </select>
          <input type="text" placeholder='Search Amazon.in' />
          <div className='searchIcon'>
          <FontAwesomeIcon icon = {faMagnifyingGlass} size='xl'/>
          </div>
        </div>
        <div className="tabs" id='tab2'>
          <a href="#">
            <img src={indianflag} alt="indian flag" />
            <p>EN</p>
            <ArrowDropDownIcon className='arrow' id='arrow1' fontSize='small'/>
          </a>
        </div>
        <div className="tabs">
          <a href="#">
            <p className='firstPara'>Hello, sign in</p>
            <p className='secondPara'>Accounts & Lists</p>
            <ArrowDropDownIcon className='arrow' fontSize='small'/>
          </a>
        </div>
        <div className="tabs">
          <a href="#">
            <p className='firstPara'>Returns</p>
            <p className='secondPara'>& Orders</p>
          </a>
        </div>
        <div className="tabs" id='tab4'>
          <a href="#">
            <span id='cartCount'>{SelectedMode}</span>
            <div className='cart'>
            <img src={cart} alt="cart image" />
            <span>Cart</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Nbar

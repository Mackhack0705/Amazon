// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Nbar from './Components/Nbar';
import HomeCarousel from './Components/HomeCarousel';
import ImgCard from './Components/ImgCard';
import About from './Components/About';
import HomeFooter from './Components/HomeFooter';

const nCard = (val) => {
  return (
    <ImgCard
      key={val.id}
      title={val.title}
      imgurl={val.image}
    />
  )
}
function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log('Error occured',error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Nbar className='page'/>
      <HomeCarousel />
      <div className="projectCard">
        {
          Data.map((val,index) => (
              <div key={val.id}>
              {nCard(val)} 
              </div>
          ))
        }
      </div>
      <About />
      <HomeFooter />
    </div>
  );
}

export default App;
// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Nbar from './Components/Nbar';
import HomeCarousel from './Components/HomeCarousel';
import ImgCard from './Components/ImgCard';
import About from './Components/About';
import HomeFooter from './Components/HomeFooter';

const nCard = (val,{handleadd},{handleremove}) => {
  return (
    <ImgCard
      key={val.id}
      imgurl={val.image}
      title={val.title}
      price={val.price}
      rate={val.rating.rate}
      count={val.rating.count}
      // desc = {val.description}
      onButtonClick1={handleadd}
      onButtonClick2={handleremove}
    />
  )
}
function App() {
  const [Data, setData] = useState([]);
  const [Count,setCount] = useState(0);
  const handleadd = (mode) => {
    setCount(Count + 1);
  }
  const handleremove = (mode) => {
    if(Count <= 0) {
      alert("No more Products are available");
    }
    else {
      setCount(Count-1);
    }
  }

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
      <Nbar className='page' count={Count}/>
      <HomeCarousel />
      <div className="projectCard">
        {
          Data.map((val,index) => (
              <div key={val.id}>
              {nCard(val,{handleadd},{handleremove})} 
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

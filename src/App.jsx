import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureProducts from './components/FeatureProducts';
import Cart from './components/Cart';
import './App.css'


function App() {  

  const [products, setProducts] = useState([
    {
      id:1,
      name:'Iphone 5',
      category:'Mobile phones',
      price:899.00,
      rating:4.1,
      image: 'iphone.jpeg'
    },
    {
      id:2,
      name:'Ipad mini',
      category:'Tablets',
      price:999.00,
      rating:4.5,
      image: 'ipad-mini.png'
    },
    {
      id:3,
      name:'Sony Television',
      category:'Television',
      price:1899.00,
      rating:4.7,
      image: 'sony-television.jpg'
    },
    {
      id:4,
      name:'VR headset',
      category:'AR',
      price:3899.00,
      rating:4.7,
      image: 'vr-headset.jpg'
    },
    {
      id:5,
      name:'Tech hoodie',
      category:'Clothes',
      price:49.00,
      rating:3.2,
      image: 'tech-hoodie.jpg'
    }
  ]);

  return (
    <div className='container-fluid m-auto py-5 sm:container md:container lg:container xl:container'>
        <Header logo="Movart"/>
        <div className="content flex flex-row flex-wrap justify-between">
          <FeatureProducts products={products}/>
          <Cart />
        </div>
        <Footer/>
    </div>
  )
}

export default App

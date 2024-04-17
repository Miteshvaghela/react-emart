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
  const [items, setItems] = useState([]);
  
  const handleSearch = (term) => {
    let filterData = products.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    setItems(filterData);
  }

  const handleAddToCart = (id) => {
    console.log('id : ', id);
  }

  const handleAddToWishList = (id) => {
    console.log('id : ', id);
  }

  return (
    <div className='container-fluid m-auto py-5 sm:container md:container lg:container xl:container'>
        {false && <Loader />}
        <Header logo="Movart" handleSearch={handleSearch}/>
        <div className="content flex flex-row flex-wrap justify-between">
          <FeatureProducts products={items.length?items:products} handleAddToCart={handleAddToCart} handleAddToWishList={handleAddToWishList}/>
          <Cart />
        </div>
        <Footer/>
    </div>
  )
}

export default App


export const Loader = () => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 bg-slate-50">
      <div role="status" >
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
      </div>
  )
}
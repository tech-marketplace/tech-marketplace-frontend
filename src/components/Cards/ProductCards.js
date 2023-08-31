import React from 'react'
import ProductPicture from '../../assets/images/productheroimage.png'
import '../../sassfiles/components/_cards.scss'
import { Link } from 'react-router-dom';
import Plusbtn from '../Buttons/Actionbtns/Plusbtn';

const img= ProductPicture
const name='Ecommerce Application';
const detail='View Details';
const price='N500,000';
function ProductCards() {
  return (
  <div className='product-cards'>
       <ProductCard
        img={img}
        name={name}
        detail={detail}
        price={price}
      />
       <ProductCard
        img={img}
        name={name}
        detail={detail}
        price={price}
      />
       <ProductCard
        img={img}
        name={name}
        detail={detail}
        price={price}
      />
      <ProductCard
        img={img}
        name={name}
        detail={detail}
        price={price}
      />
    </div>
  )
}

const ProductCard=({ img, detail, price })=>{
return(
  <article className='product-card'>
    <div className='product-image'>
    <img src={img} alt=''className='p-image'/>
    </div>
    <h1>{name}</h1>
    <Link to='/product-details'>
      <p>{detail}</p>
    </Link>
    <h2>{price}</h2>
    <Plusbtn/>
  </article>
)
};
export default ProductCards
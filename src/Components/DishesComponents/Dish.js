import { useState } from "react";
import ChangeQuantity from "./ChangeQuantity";
import { useDispatch } from 'react-redux';
import { addItemsTocart } from '../../redux/cartSlice'

const Dish = ({ dish}) => {

 const [quantity, setQuantity] = useState(1);
 const dispatch = useDispatch()

  return(
    <div>
      <img className="dishes-img" src={ `${dish.img}.jpg` } width="500" alt="dish" />
      <h2> { dish.name } </h2>
      <p>${ dish.price }</p>

      {/* TO FIX LATER */}
      <ChangeQuantity quantity={ quantity }  setQuantity={ setQuantity } />
      <button onClick={ () => dispatch(addItemsTocart({ dish, quantity })) } >Add to cart</button>
    </div>
  )
}

export default Dish;
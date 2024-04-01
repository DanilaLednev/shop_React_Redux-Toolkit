import { dishesData } from "../../data/dataDishes";

import { removeItemFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux';

const CartItem = ({ cartItem }) => {

 const dishes = dishesData.find((dish) => dish.id === cartItem.dishId)

 const dispatch = useDispatch(removeItemFromCart)


  return(
    <div>
     <p>
      <span>{ dishes.name }: </span> 
      { cartItem.quantity } portion(s) 
      <span>  ${ dishes.price * cartItem.quantity}</span> 
      </p> 
      <span onClick={ () => dispatch(removeItemFromCart({ cartItemId: cartItem.id })) } >
      <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="20" alt="iconTrash" /> 
      </span>
    </div>
  )
}

export default CartItem;
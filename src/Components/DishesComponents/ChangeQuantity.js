
const ChangeQuantity = ({ quantity, setQuantity }) => {

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity)
  }

  const removeQuantity = () => {
    const newQuantity = quantity - 1;
    if(newQuantity < 1) return 1
    setQuantity(newQuantity)
  }

  return(
    <div>
      <button className="btn-quantity" onClick={ addQuantity } >+</button>
      <span className="quantity" >{ quantity }</span>
      <button className="btn-quantity" onClick={ removeQuantity } >–</button>
    </div>
  )
}

export default ChangeQuantity
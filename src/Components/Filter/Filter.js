
import { useSelector, useDispatch } from 'react-redux'
import { getSelectedCategory } from '../../redux/dishesSlice';
import { filterCategory } from '../../redux/dishesSlice'

const Filter = ({ category }) => {

  const selectedCategory = useSelector(getSelectedCategory); //? We can read data from the store with useSelector 
  const dispatch = useDispatch()

  return(
    <div>
    <p onClick={ () => dispatch(filterCategory(category)) }
     className={ selectedCategory === category
      ? 'categoryButtonSelected'
      : 'categoryButton'
    } >
      { category }
    </p>
    </div>
  )
}

export default Filter;
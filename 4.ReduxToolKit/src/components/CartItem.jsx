import { ChevronDown, ChevronUp } from '../icons'
import { useDispatch } from 'react-redux'
import { removeItem, adjustItemQty } from '../features/cart/cart'
const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className='amount-btn'
          onClick={() =>
            dispatch(adjustItemQty({ id: id, context: 'increase' }))
          }
        >
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button
          className='amount-btn'
          onClick={() =>
            dispatch(adjustItemQty({ id: id, context: 'decrease' }))
          }
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}
export default CartItem

import { useEffect } from 'react'
import CartContainer from './components/CartContainer'
import { calculateTotal } from './features/cart/cart'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { getCartItems } from './features/cart/cart'
const url = 'https://course-api.com/react-useReducer-cart-project'
function App() {
  const { cartItems, isLoading, isError, errorMessage } = useSelector(
    (store) => store.cart
  )
  const { isOpen } = useSelector((store) => store.modal)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems])
  useEffect(() => {
    dispatch(getCartItems(url))
  }, [])
  if (isLoading) {
    return (
      <main>
        <h2>Loading</h2>
      </main>
    )
  }
  if (isError) {
    return (
      <main>
        <h2>{errorMessage}</h2>
      </main>
    )
  }
  return (
    <main>
      {isOpen && <Modal></Modal>}
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  )
}
export default App

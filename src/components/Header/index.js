import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const Header = () => {
  const {cartList} = useContext(CartContext)

  //   const getCartItemsCount = () =>
  //     cartList.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <Link to="/cart" className="cart-icon-link">
      <button type="button" className="cart-icon-button">
        <AiOutlineShoppingCart className="cart-icon" />
      </button>
      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="m-0 cart-count">{cartList.length}</p>
      </div>
    </Link>
  )

  return (
    <header className="p-4 d-flex flex-row align-items-center nav-header">
      <Link to="/">
        <h1 className="m-0 logo-heading">UNI Resto Cafe</h1>
      </Link>
      <div className="d-flex flex-row align-items-center ms-auto">
        <p className="mt-0 mb-0 me-2 d-none d-sm-block my-orders-text">
          My Orders
        </p>
        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header

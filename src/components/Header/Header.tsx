import { useState } from 'react';
import { FiLogIn, FiLogOut ,FiShoppingCart } from 'react-icons/fi'
import { Cart } from '../Cart/Cart';

export const Header: React.FC = () => {

  const [isLogged, setIsLogged] = useState(false);

  const [showCart, setShowCart] = useState(false)

  function handleCart() {
    setShowCart(prevShowCart => !prevShowCart);
    console.log(showCart)
  }

  function handleIsLogged() {
    setIsLogged(!isLogged)
  }

  
  return (
    <header className="bg-blue-800">
      <div className="flex justify-between items-center max-w-7xl my-0 mx-auto py-0 px-8 h-16">
        <h1 className="text-white font-semibold text-xl">MyShop.</h1>
        <div className="flex gap-4">
          <button onClick={handleIsLogged} className={`border-none rounded-md h-8 py-0 px-4 text-white flex items-center gap-2 ${ isLogged ? 'bg-red-600' : 'bg-green-600'}`}>
            { isLogged ? 'Logout' : 'Login' }
            { isLogged ? <FiLogOut className='text-sm'/> : <FiLogIn className='text-sm'/> }
          </button>
          <button onClick={handleCart} className="border-none rounded-md h-8 py-0 px-4 bg-violet-400 text-black flex items-center gap-2">
            Carrinho
            <FiShoppingCart className='text-sm'/>
          </button>
        </div>
      </div>

      <Cart showCart={showCart} />
    </header>
  )
}
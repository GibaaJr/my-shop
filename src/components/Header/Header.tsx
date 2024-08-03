import { FiLogIn, FiShoppingCart } from 'react-icons/fi'

export const Header: React.FC = () => {
  return (
    <header className="bg-blue-800">
      <div className="flex justify-between items-center max-w-7xl my-0 mx-auto py-0 px-8 h-16">
        <h1 className="text-white">MyShop.</h1>
        <div className="flex gap-4">
          <button className="border-none rounded-md h-8 py-0 px-4 bg-green-600 text-white flex items-center gap-2">
            Login
            <FiLogIn className='text-sm'/>
          </button>
          <button className="border-none rounded-md h-8 py-0 px-4 bg-violet-400 text-black flex items-center gap-2">
            Carrinho
            <FiShoppingCart className='text-sm'/>
          </button>
        </div>
      </div>
    </header>
  )
}
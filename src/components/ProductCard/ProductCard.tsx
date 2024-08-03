import { FiShoppingCart } from 'react-icons/fi'


export const ProductCard: React.FC = () => {
  return (
    <div className='bg-white w-full p-4 my-0 mx-auto'>
      <img 
        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" 
        alt=""
        className='w-[90%] '
       />
      <h2 className='text-xl/none'>Mens Casual Premium Slim Fit T-Shirts</h2>
      <div className='flex items-center justify-between'>
        <span>4.1</span>
        <strong>$4,22</strong>
      </div>
      <div className='flex justify-center'>
        <button className="border-none rounded-md h-8 py-0 px-4 bg-blue-600 text-white flex items-center gap-2">
          Adicionar ao Carrinho
          <FiShoppingCart />
        </button>
      </div>
    </div>
  )
}
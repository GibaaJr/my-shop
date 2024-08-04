import { FiShoppingCart } from 'react-icons/fi'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '../../data/products'

interface ProductCardProps {
  product: Product
}


export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='bg-white w-full p-8 my-0 mx-auto rounded-md flex flex-col items-center drop-shadow-myshop-shadow'>
      <img 
        src={product.image}
        alt={product.description}
        className='w-[250px] h-[400px] object-contain'
       />
      <h2 className='text-base/none mt-4'>{product.title}</h2>
      <div className='flex items-center justify-between w-full mt-4'>
        <span className='flex justify-center items-center text-xs/none text-zinc-400' >
          { Array.from({ length: 5 }).map((_, index) => 
            index < Math.round(product.rating.rate) ? ( 
              <AiFillStar key={index} className='text-sm text-black'/> 
            ) : (
               <AiOutlineStar key={index} className='text-sm text-black'/> 
              ) 
            )}
          ({product.rating.rate})
        </span>
        <strong>${product.price}</strong>
      </div>
      <div className='flex justify-center mt-4 w-full'>
        <button className="border-none rounded-md h-10 bg-blue-600 text-white flex items-center gap-2 w-full justify-center">
          Adicionar ao Carrinho
          <FiShoppingCart />
        </button>
      </div>
    </div>
  )
}
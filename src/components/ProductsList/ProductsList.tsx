import { ProductCard } from "../ProductCard/ProductCard"
import { products } from '../../data/products'

export const ProductsList: React.FC = () => {




  return (
    <main className="container max-w-7xl h-full my-16 mx-auto py-0 px-8 flex justify-between items-stretch gap-8 flex-wrap  parent">
      { products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      )) }
    </main>
  )
}
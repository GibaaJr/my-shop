import classNames from 'classnames'

interface CartProps {
  showCart: boolean
}

export const Cart: React.FC<CartProps> = ({showCart}) => {
  return (
    <aside className={classNames(`Container fixed top-0 w-80 bg-white h-lvh z-10 p-8 drop-shadow-myshop-shadow transition-all duration-300`, { 'right-0': showCart, '-right-80': !showCart })}>
      <h1 className="text-2xl">Carrinho</h1>
    </aside>
  )
}
import Image from 'next/image'

interface ProductProps {
  img: string
  title: string
  price: number
}

const ProductCard: React.FC<ProductProps> = ({ img, title, price }) => {
  return (
    <article className="w-full min-w-[400px] rounded-xl p-4 shadow-lg hover:shadow-lg">
      <Image src={img} width={450} className="rounded-xl" height={300} />
      <h3 className="py-4 text-2xl font-semibold">{title}</h3>
      <div className="py-4 font-medium text-gray-600">
        <p>Year 1192 | weapons</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">{`$${price}`}</h2>
        <button className="rounded-lg border-2 border-indigo-500 px-4 py-2 font-semibold text-indigo-500">
          View Details
        </button>
      </div>
    </article>
  )
}

export default ProductCard

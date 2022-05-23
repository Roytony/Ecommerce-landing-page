import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import ProductCard from './ProductCard'

const RecentSection: React.FC = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold">Recently Added</h2>
      <div className="flex items-center justify-between">
        <p className="text-lg text-gray-500">
          Not thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment.
        </p>
        <div className="flex space-x-6">
          <div className="grid h-10 w-10 place-items-center rounded-full border">
            <ArrowLeftIcon className="h-6" />
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-full border bg-orange-500 text-white">
            <ArrowRightIcon className="h-6" />
          </div>
        </div>
      </div>
      <div className="flex space-x-10 overflow-x-auto p-4  ">
        <ProductCard
          img="https://images.pexels.com/photos/6243342/pexels-photo-6243342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="jgnsfdjgnjfdn"
          price={900}
        />
        <ProductCard
          img="https://images.pexels.com/photos/6243342/pexels-photo-6243342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="jgnsfdjgnjfdn"
          price={900}
        />
        <ProductCard
          img="https://images.pexels.com/photos/6243342/pexels-photo-6243342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="jgnsfdjgnjfdn"
          price={900}
        />
        <ProductCard
          img="https://images.pexels.com/photos/6243342/pexels-photo-6243342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="jgnsfdjgnjfdn"
          price={900}
        />
        <ProductCard
          img="https://images.pexels.com/photos/6243342/pexels-photo-6243342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="jgnsfdjgnjfdn"
          price={900}
        />
        <ProductCard
          img="https://images.pexels.com/photos/6243342/pexels-photo-6243342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="jgnsfdjgnjfdn"
          price={900}
        />
        <ProductCard
          img="https://images.pexels.com/photos/6243342/pexels-photo-6243342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="jgnsfdjgnjfdn"
          price={900}
        />
        <ProductCard
          img="https://images.pexels.com/photos/6243342/pexels-photo-6243342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="jgnsfdjgnjfdn"
          price={900}
        />
      </div>
    </section>
  )
}

export default RecentSection

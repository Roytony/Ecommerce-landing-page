import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'

const Feedback: React.FC = () => {
  return (
    <section className="flex items-center  justify-between">
      <Image
        objectFit="contain"
        src={'/Girl Images.png'}
        width={400}
        height={600}
      />
      <div className="w-[50%]">
        <h2 className="text-3xl font-bold">Buyer's Feedback</h2>
        <p className="py-4 leading-6 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odio
          dolor eius dolorem? Expedita mollitia nobis similique vero, quaerat
          laudantium, quisquam numquam tempora modi culpa odit nemo, in placeat
          sequi.
        </p>
        <div className="flex items-center space-x-5">
          <Image
            src="https://i.pravatar.cc/150?img=60"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <p className="font-bold">Arindam Roy</p>
            <p className="text-gray-500">Software Developer</p>
            <div className="flex space-x-2">
              <StarIcon className="h-5 text-yellow-500" />
              <StarIcon className="h-5 text-yellow-500" />
              <StarIcon className="h-5 text-yellow-500" />
              <StarIcon className="h-5 text-yellow-500" />
              <StarIcon className="h-5 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback

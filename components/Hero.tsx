import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex items-center justify-between space-x-4  pt-16">
      <div>
        <h1 className="text-6xl font-semibold leading-normal">
          World's Biggest <br />
          <span className="text-[#263FA4]">Antique Collection</span>
        </h1>
        <p className="py-6 leading-8 text-gray-800">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end <br /> distrusts may instantly was household applauded
          incommode.
        </p>
        <div className="flex items-center space-x-5">
          <button className="rounded-lg bg-orange-500 px-8 py-3 text-white">
            Discover Now
          </button>
          <p>Watch Video</p>
        </div>
      </div>
      <div className="relative ">
        <Image src="/image 870.png" width={300} height={500} />
        <img className="absolute top-0 left-0 -z-10" src="/Shapes.png" />
      </div>
      <div className="space-y-6">
        <StatItem src="/icons/Group-1.svg" heading={'1322'} para="Year" />
        <StatItem src="/icons/Group-2.svg" heading={'29'} para="Bids so far" />
        <StatItem src="/icons/Group.svg" heading={'China'} para="origin" />
      </div>
    </div>
  )
}

interface StatItemProps {
  src: string
  heading: string
  para: string
}

const StatItem = ({ src, heading, para }: StatItemProps) => (
  <div className="flex items-center space-x-8">
    <div className="rounded-xl p-4 shadow-xl">
      <Image src={src} width={40} height={40} />
    </div>
    <div>
      <h1 className="text-2xl font-bold">{heading}</h1>
      <p>{para}</p>
    </div>
  </div>
)

export default Hero

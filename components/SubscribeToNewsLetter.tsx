import { PaperAirplaneIcon } from '@heroicons/react/outline'

const SubscribeToNewsLetter: React.FC = () => {
  return (
    <div className="flex h-60 w-full flex-col justify-center  rounded-lg bg-[#132742] px-10">
      <h1 className="text-4xl font-bold text-white">
        Subscribe Our Newsletter
      </h1>
      <p className="py-4 text-xl text-gray-300">
        Reciev latest news, update, and many other things every week.{' '}
      </p>
      <div className="flex w-[500px] justify-between rounded-md bg-white p-4">
        <input
          placeholder="Enter your email Address"
          className="focus:outline-none"
        />
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange-600">
          <PaperAirplaneIcon className="h-4 rotate-12  text-white" />
        </div>
      </div>
    </div>
  )
}

export default SubscribeToNewsLetter

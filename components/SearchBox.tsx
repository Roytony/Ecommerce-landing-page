const SearchBox: React.FC = () => {
  return (
    <form className="mt-10 flex justify-between rounded-lg bg-white p-8 shadow-xl">
      <div className="flex flex-col items-center">
        <label className="text-xl font-semibold">Location</label>
        <select className="bg-white p-3 focus:outline-none">
          <option>Norway</option>
        </select>
      </div>
      <div className="flex flex-col items-center">
        <label className="text-xl font-semibold">Religion</label>
        <select className="bg-white p-3 focus:outline-none">
          <option>Astro</option>
        </select>
      </div>
      <div className="flex flex-col items-center">
        <label className="text-xl font-semibold">Year</label>
        <select className="bg-white p-3 focus:outline-none">
          <option>793 AD</option>
        </select>
      </div>
      <div className="flex flex-col items-center">
        <label className="text-xl font-semibold">Type</label>
        <select className="bg-white p-3 focus:outline-none">
          <option>Weapons</option>
        </select>
      </div>
      <button className="rounded-xl bg-gray-900 px-8  text-white ">
        Submit
      </button>
    </form>
  )
}

export default SearchBox

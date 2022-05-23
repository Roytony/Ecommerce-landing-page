const Header = () => {
  return (
    <header className="flex items-center justify-between ">
      <h2 className="text-3xl font-bold">Siboria</h2>
      <nav className="flex items-center space-x-10 text-lg">
        <p className="cursor-pointer hover:font-bold">Home</p>
        <p className="cursor-pointer hover:font-bold">Collections</p>
        <p className="cursor-pointer hover:font-bold">How we Collect</p>
        <p className="cursor-pointer hover:font-bold">Sell an Antique</p>
        <p className="cursor-pointer hover:font-bold">Blog</p>
      </nav>
      <button className="rounded-lg bg-orange-500 px-8 py-3 text-white">
        Our Collections
      </button>
    </header>
  )
}

export default Header

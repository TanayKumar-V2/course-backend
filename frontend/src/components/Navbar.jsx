function Navbar() {
  return (
    <nav className="flex items-center bg-green-500 px-6 py-3">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-3xl font-bold text-white">Course</h1>
        <h1 className="text-3xl font-bold text-green-300 ml-1">Stock</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-11 text-white font-semibold ml-10">
        <li className="hover:border-b transition duration-1000 ease-in-out">
          <a href="#">Home</a>
        </li>
        <li className="hover:border-b transition duration-1000 ease-in-out">
          <a href="#">Create Course</a>
        </li>
        <li className="hover:border-b transition duration-1000 ease-in-out">
          <a href="#">About</a>
        </li>
      </ul>

      {/* Auth Buttons - pushed to right using ml-auto */}
      <ul className="flex items-center gap-6 text-white font-semibold ml-auto">
        <li className="hover:bg-green-600 cursor-pointer p-3 rounded-xl transition duration-300 ease-in-out">SignIn</li>
        <li className="hover:bg-green-600 cursor-pointer p-3 rounded-xl transition duration-300 ease-in-out">SignUp</li>
      </ul>
    </nav>
  );
}

export default Navbar;

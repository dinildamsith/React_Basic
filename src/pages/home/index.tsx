import { Link } from "react-router-dom"; //  link eka use karne api ape url path eka change kargana
function HomePage() {
  return (
    // <> code... </>  mekata Fragment ekak kiyanwa.meka use karne element tikaka wrap kargan wagy
    // function ekakin return karna puluwn 1 element ekak withri.
    <>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/customer" className="text-white hover:text-gray-200">
              Customer
            </Link>
          </li>
          <li>
            <Link to="/item" className="text-white hover:text-gray-200">
              Item
            </Link>
          </li>
          <li>
            <Link to="/order" className="text-white hover:text-gray-200">
              Order
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HomePage;

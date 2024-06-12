import { Link } from "react-router-dom";
function NaveBar() {
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
            <Link to="/urlParameterTest" className="text-white hover:text-gray-200">
            Url Parameter
            </Link>
          </li>
          <li>
            <Link to="/order" className="text-white hover:text-gray-200">

            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NaveBar;

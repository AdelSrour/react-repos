import { Link, NavLink } from "react-router-dom";
import logoimg from "../../assets/images/freshcart-logo.svg";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Navbar() {
  let { isLoggedin, Loggedout } = useAuthContext();

  return (
    <>
      <nav
        id="navbar-dropdown"
        className="bg-white border-gray-200 dark:bg-gray-900 shadow"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logoimg} className="h-8" />
          </Link>

          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {isLoggedin ? (
                <>
                  <li>
                    <NavLink
                      to="/"
                      className="block py-2 px-3"
                      aria-current="page"
                    >
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/product"
                      className="block py-2 px-3"
                      aria-current="page"
                    >
                      Product
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/cart"
                      className="block py-2 px-3"
                      aria-current="page"
                    >
                      Cart
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/brands"
                      className="block py-2 px-3"
                      aria-current="page"
                    >
                      Brands
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/Category"
                      className="block py-2 px-3"
                      aria-current="page"
                    >
                      Category
                    </NavLink>
                  </li>

                  <li>
                    <button
                      onClick={Loggedout}
                      className="block py-2 px-3"
                      aria-current="page"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/signup"
                      className="block py-2 px-3"
                      aria-current="page"
                    >
                      Signup
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/login"
                      className="block py-2 px-3"
                      aria-current="page"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

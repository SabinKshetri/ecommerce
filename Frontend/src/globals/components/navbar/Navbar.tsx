import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";
import { fetchCartItems } from "../../../store/cartSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { items } = useAppSelector((state) => state.carts);
  useEffect(() => {
    const token = localStorage.getItem("jwt_token");
    setIsLoggedIn(!!token || !!user.token);
  }, [user.token]);

  const handleLogout = () => {
    localStorage.removeItem("jwt_token");
    navigate("/login");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  return (
    <div>
      <nav className="space-x-3 md:space-x-6">
        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
            >
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
            >
              <span>Register</span>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/cart"
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
            >
              <span>Cart</span>
            </Link>
            <Link
              to="#"
              onClick={handleLogout}
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
            >
              <span>Logout</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

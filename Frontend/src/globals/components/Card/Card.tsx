import { Link } from "react-router-dom";
import { Product } from "../../../types/productTypes";

interface CardProps {
  data: Product;
}

const Card: React.FC<CardProps> = ({ data }) => (
  <>
    <Link to={`/product/${data.id}`}>
      <div className="flex justify-center items-start min-h-screen ">
        <div className="flex-col md:flex-row justify-between flex gap-4 items-center mx-4 py-5">
          <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
            <div className="relative w-full md:w-48 flex justify-center items-center md:justify-center md:items-center">
              <img
                src={data?.productImageUrl}
                alt="shopping image"
                className="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
              />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                  {data?.productName}
                </h1>
                <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                  ${data?.productPrice}
                </div>
                <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                  {data?.productTotalStockQty}
                </div>
              </div>

              <div className="flex mb-4 text-sm font-medium">
                <button
                  type="button"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                >
                  Buy now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Link>
  </>
);

export default Card;

import React from "react";
import Breadcrumb from "../components/CommonComponets/BreadCrumb";
import Container from "../components/CommonComponets/Container";
import card from "../assets/App1.png";
import { Link } from "react-router";

const Cart: React.FC = () => {
  return (
    <div>
      <Breadcrumb />
      <Container>
        <div className="grid grid-cols-3 gap-x-10 pt-10! pb-20! max-md:grid-cols-1">
          {/* Left Section – Cart Items */}
          <div className="col-span-2 border border-gray-100 rounded-md p-6!">
            <h2 className="body-large-500 text-gray-900 border-b border-gray-100 pb-4! mb-5!">
              Shopping Cart
            </h2>

            {/* Cart Item */}
            <div className="flex items-start justify-between gap-x-5 border-b border-gray-100 pb-5! mb-5!">
              <div className="flex items-center gap-x-4">
                <div className="w-[120px] h-[120px] bg-gray-100 rounded-md flex items-center justify-center">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    alt="product"
                    className="object-contain w-[100px] h-[100px]"
                  />
                </div>
                <div>
                  <h3 className="body-medium-600 text-gray-900 mb-2!">
                    Velvet Sneaker
                  </h3>
                  <p className="body-small-400 text-gray-500">
                    Size: <span className="text-gray-900 font-medium">MD</span>
                  </p>
                  <p className="body-small-400 text-gray-500 mt-1!">
                    Color:{" "}
                    <span className="text-gray-900 font-medium">Gray</span>
                  </p>
                  <button className="mt-4! text-danger-500 text-sm font-medium hover:text-danger-600 cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>

              {/* Quantity & Price */}
              <div className="flex flex-col items-end">
                <p className="body-medium-600 text-gray-900 mb-3!">$120.00</p>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button className="px-3! py-1.5! text-gray-700 text-base">
                    −
                  </button>
                  <span className="px-4! py-1.5! text-gray-900 font-medium">
                    1
                  </span>
                  <button className="px-3! py-1.5! text-gray-700 text-base">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Repeat More Cart Items (static) */}
            <div className="flex items-start justify-between gap-x-5 border-b border-gray-100 pb-5! mb-5!">
              <div className="flex items-center gap-x-4">
                <div className="w-[120px] h-[120px] bg-gray-100 rounded-md flex items-center justify-center">
                  <img
                    src="https://readymadeui.com/images/product15.webp"
                    alt="product"
                    className="object-contain w-[100px] h-[100px]"
                  />
                </div>
                <div>
                  <h3 className="body-medium-600 text-gray-900 mb-2!">
                    Smart Watch Series 5
                  </h3>
                  <p className="body-small-400 text-gray-500">
                    Color:{" "}
                    <span className="text-gray-900 font-medium">Black</span>
                  </p>
                  <button className="mt-4! text-danger-500 text-sm font-medium hover:text-danger-600 cursor-pointer">
                    Remove
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="body-medium-600 text-gray-900 mb-3!">$99.00</p>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button className="px-3! py-1.5! text-gray-700 text-base">
                    −
                  </button>
                  <span className="px-4! py-1.5! text-gray-900 font-medium">
                    1
                  </span>
                  <button className="px-3! py-1.5! text-gray-700 text-base">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section – Summary */}
          <div className="border border-gray-100 rounded-md p-6! h-max">
            <h3 className="body-large-500 text-gray-900 mb-5! border-b border-gray-200 pb-3!">
              Order Summary
            </h3>

            <div className="space-y-4!">
              <div className="flex justify-between text-gray-600 body-medium-500">
                <span>Subtotal</span>
                <span className="text-gray-600 font-semibold">$219.00</span>
              </div>
              <div className="flex justify-between text-gray-600 body-medium-500">
                <span>Shipping</span>
                <span className="text-gray-600 font-semibold">$8.00</span>
              </div>
              <div className="flex justify-between text-gray-600 body-medium-500">
                <span>Tax</span>
                <span className="text-gray-600 font-semibold">$3.00</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-gray-600  body-medium-600">
                <span>Total</span>
                <span>$230.00</span>
              </div>
            </div>

            {/* Checkout Buttons */}
            <div className="mt-8! space-y-3!">
              <button className="bg-primary-500 text-white w-full py-3! rounded-md body-large-500 hover:bg-primary-600 transition cursor-pointer">
                PROCEED TO CHECKOUT
              </button>
              <Link
                to={"/shop"}
                className="border border-gray-100 w-full py-3! text-center rounded-md body-medium-400 text-gray-900 hover:bg-gray-50 transition cursor-pointer"
              >
                CONTINUE SHOPPING
              </Link>
            </div>

            {/* Safe Checkout */}
            <div className="border border-gray-100 rounded-md mt-8! p-4! text-center">
              <p className="body-small-500 text-gray-800 mb-3!">
                100% Guarantee Safe Checkout
              </p>
              <img src={card} alt="cards" className="mx-auto h-6!" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;

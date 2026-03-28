import React, { useState } from "react";
import Nav from "../Component/Nav";
import Navbar from "../Component/Navbar";
import { Trash2 } from "lucide-react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useCartStore } from "../../store";


const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [info, setinfo] = useState({ name: "", email: "", address: "" });

  // Increase quantity of an item
  const increaseQty = (item) => {
    addToCart({ ...item });
  };

  // Decrease quantity of an item
  const decreaseQty = (id) => {
    const itemCount = cartItems.filter((i) => i.id === id).length;

    if (itemCount > 1) {
      const index = cartItems.findIndex((i) => i.id === id);
      if (index !== -1) {
        const updated = [...cartItems];
        updated.splice(index, 1);
        useCartStore.setState({ cartItems: updated });
      }
    } else {
      removeFromCart(id);
    }
  };

  // Group items and count quantities
  const grouped = cartItems.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || { ...item, qty: 0 };
    acc[item.id].qty++;
    return acc;
  }, {});

  const groupedItems = Object.values(grouped);

  // Calculate total
  const total = groupedItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE,
    tx_ref: Date.now(),
    amount: 100,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div>
      <Nav />
      <Navbar page="cart" />

      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-2 mb-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
            🛒 Your Cart
          </h1>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="text-center mt-20 text-gray-600 text-lg sm:text-xl">
            Your cart is empty 🛍
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            {/* 🛍 Scrollable Cart Items */}
            <div
              className="flex-1 lg:w-2/3 flex flex-col gap-1 max-h-[70vh] overflow-y-auto pr-2"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#9ca3af #f3f4f6",
              }}
            >
              {groupedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white shadow-md py-2 px-6 rounded-xl transition hover:shadow-lg"
                >
                  {/* Product Info */}
                  <div className="bg-gray-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-contain mx-auto sm:mx-0"
                    />
                    <div className="text-center sm:text-left">
                      <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {item.title.slice(0, 40)}...
                      </h2>
                      <p className="text-gray-500 text-sm">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex justify-center sm:justify-start items-center gap-3 mt-3 sm:mt-0">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 text-lg font-semibold"
                    >
                      −
                    </button>
                    <span className="font-medium text-sm sm:text-base">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => increaseQty(item)}
                      className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 text-lg font-semibold"
                    >
                      +
                    </button>
                  </div>

                  {/* Price & Remove */}
                  <div className="flex justify-between sm:justify-end items-center mt-4 sm:mt-0 gap-4 sm:gap-6">
                    <p className="font-semibold text-gray-800 text-sm sm:text-lg">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800 transition"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 💰 Order Summary */}
            <div className="lg:w-1/3 w-full mt-10 lg:mt-0">
              <div className="bg-white shadow-md p-6 rounded-xl lg:sticky lg:top-24">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Order Summary
                </h2>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 font-medium">Subtotal:</span>
                  <span className="text-gray-800 font-semibold">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600 font-medium">Shipping:</span>
                  <span className="text-gray-800 font-semibold">$0.00</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={clearCart}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
                  >
                    Clear Cart
                  </button>
                  <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
                    <input
                      onChange={(e) =>
                        setinfo({ ...info, name: e.target.value })
                      }
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    />
                    <input
                      onChange={(e) =>
                        setinfo({ ...info, email: e.target.value })
                      }
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    />
                    <textarea
                      onChange={(e) =>
                        setinfo({ ...info, address: e.target.value })
                      }
                      type="text"
                      placeholder="Address"
                      className="w-full h-20 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    />
                  </div>
                  <button
                    // onClick={() => {
                    //   handleFlutterPayment({
                    //     callback: (response) => {
                    //       console.log(response);
                    //       closePaymentModal(); // this will close the modal programmatically
                    //     },
                    //     onClose: () => {},
                    //   });
                    // }}
                    className="bg-green-600 text-center text-white px-6 py-2 rounded-lg hover:bg-green-700 transition text-sm sm:text-base cursor-pointer"
                  >
                    <a href="/checkout">
                      Proceed to Checkout
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

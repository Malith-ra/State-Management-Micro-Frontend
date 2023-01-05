import React from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";

import { StoreProvider, useStore } from "store/store";

import "./index.scss";

const App = () => {
  const { count, increment, decrement } = useStore();
  return (

    <div>
      <div>
        <Header />
      </div>
      <div className="max-w-3xl p-6 mx-auto mt-24 rounded-md ">
        <div className="px-10 pb-5 bg-white shadow-md">
          <div class="w-full pt-1 pb-5">
            <div class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i class="mdi mdi-credit-card-outline text-3xl">P</i>
            </div>
          </div>
          <div class="mb-10">
            {count === 0 && (
              <h1 class="text-center font-bold text-xl uppercase">
                Secure payment step 01
              </h1>
            )}
            {count === 1 && (
              <h1 class="text-center font-bold text-xl uppercase">
                Secure payment step 02
              </h1>
            )}
            {count === 2 && (
              <h1 class="text-center font-bold text-xl uppercase">
                Secure payment step 03
              </h1>
            )}
          </div>

          <div class="mb-3 flex -mx-2">
            <div class="px-2">
              <label for="type1" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  class="h-8 ml-3"
                />
              </label>
            </div>
            <div class="px-2">
              <label for="type2" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                />
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  class="h-8 ml-3"
                />
              </label>
            </div>
          </div>

          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Name on card</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Smith"
                type="text"
              />
            </div>
          </div>
          <div class="mb-3">
            <label class="font-bold text-sm mb-2 ml-1">Card number</label>
            <div>
              <input
                class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
            </div>
          </div>
          <div class="mb-3 -mx-2 flex items-end">
            <div class="px-2 w-1/2">
              <label class="font-bold text-sm mb-2 ml-1">Expiration date</label>
              <div>
                <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="01">01 - January</option>
                  <option value="02">02 - February</option>
                  <option value="03">03 - March</option>
                  <option value="04">04 - April</option>
                  <option value="05">05 - May</option>
                  <option value="06">06 - June</option>
                  <option value="07">07 - July</option>
                  <option value="08">08 - August</option>
                  <option value="09">09 - September</option>
                  <option value="10">10 - October</option>
                  <option value="11">11 - November</option>
                  <option value="12">12 - December</option>
                </select>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>
          <div class="mb-10">
            <label class="font-bold text-sm mb-2 ml-1">Security code</label>
            <div>
              <input
                class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="000"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-between mb-5 ">
            <button
              onClick={decrement}
              className="px-3 py-1 text-white bg-red-500 rounded-lg"
            >
              Step Back
            </button>
            <button
              onClick={increment}
              className="px-3 py-1 text-white bg-indigo-500 rounded-lg"
            >
              Step Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);

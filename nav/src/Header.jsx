import React from "react";
import { Stepper } from "react-form-stepper";

import { useStore } from "store/store";

export default () => {
  const { count, clear } = useStore();
  return (

    <header>
      <div className="bg-white shadow-md">
        <div className="px-2 py-5 mx-auto max-w-7xl">
          <div className="grid grid-cols-12">
            <div className="col-span-12 ">
              <Stepper
                steps={[
                  { label: "Step 1" },
                  { label: "Step 2" },
                  { label: "Step 3" },
                ]}
                activeStep={count}
              />
            </div>
            {/* <div className="flex items-center justify-center col-span-2">
              <button
                onClick={clear}
                className="px-4 py-2 font-bold text-white bg-red-600 rounded"
              >
                Clear Stepper
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

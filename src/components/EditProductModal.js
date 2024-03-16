import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventoryData } from "../services/inventory";
import { fetchInventorySuccess } from "../store/actions/inventoryActions";

const EditProductModal = ({ onClose, index }) => {
  const { inventory } = useSelector((state) => state.inventory);
  const [product, setProduct] = useState(inventory[index]);
  const dispatch = useDispatch();

  //function to handle input value change
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.name === "price" || e.target.name === "value"
          ? `$${e.target.value}`
          : e.target.value,
    });
  };

  //function to handle Save button click
  const handleSave = () => {
    const updatedInventory = [...inventory];
    updatedInventory[index] = product;
    dispatch(fetchInventorySuccess(updatedInventory));
    onClose();
  };

  return (
    <div className="fixed z-1 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-stone-800 opacity-30"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="border border-stone-700 inline-block align-bottom bg-gray-100 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-stone-800 px-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="w-full">
                <div className="flex justify-between">
                  <h3 className="text-2xl leading-6 font-medium text-slate-200">
                    Edit Product
                  </h3>
                  <button
                    onClick={onClose}
                    type="button"
                    className="text-lime-600 focus:outline-none border border-stone-700 rounded-md bg-stone-800 p-1"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-slate-200">{product?.name}</p>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Category
                    </label>
                    <input
                      onChange={handleChange}
                      name="category"
                      id="category"
                      placeholder={product?.category}
                      className="mt-3 py-2 px-3 block w-full shadow-sm sm:text-sm rounded-xl bg-stone-700 outline-none text-slate-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Price
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      name="price"
                      id="price"
                      placeholder={product?.price}
                      className="mt-3 py-2 px-3 block w-full shadow-sm sm:text-sm rounded-xl bg-stone-700 outline-none text-slate-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Quantity
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      name="quantity"
                      id="quantity"
                      placeholder={product?.quantity}
                      className="mt-3 py-2 px-3 block w-full shadow-sm sm:text-sm rounded-xl bg-stone-700 outline-none text-slate-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="value"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Value
                    </label>
                    <input
                      onChange={handleChange}
                      type="number"
                      name="value"
                      id="value"
                      placeholder={product?.value}
                      className="mt-3 py-2 px-3 block w-full shadow-sm sm:text-sm rounded-xl bg-stone-700 outline-none text-slate-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-stone-800 px-4 py-3 sm:px-6 sm:flex justify-end">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-lime-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              type="button"
              className="mt-3 w-full bg-stone-700 inline-flex justify-center rounded-xl border border-transparent shadow-sm px-4 py-2 text-base font-medium text-slate-300 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;

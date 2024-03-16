import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventorySuccess } from "../store/actions/inventoryActions";
import EditProductModal from "./EditProductModal";
import LoadingSpinner from "./Common/LoadingSpinner";
import ErrorAlert from "./Common/ErrorAlert";

// Header content for the inventory table
const tableHeaderContent = [
  "Name",
  "Category",
  "Price",
  "Quantity",
  "Value",
  "Actions",
];

export const InventoryTable = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const { inventory, loading, error } = useSelector((state) => state.inventory);
  const { isUser } = useSelector((state) => state.role);
  const dispatch = useDispatch();
  const showModal = (index) => {
    setSelectedItemIndex(index);
    setShowEditModal(true);
  };

  const hideModal = () => {
    setShowEditModal(false);
    setSelectedItemIndex(null);
  };

  //function to delete row
  const deleteRow = (name) => {
    const filteredData = inventory.filter((item) => item.name !== name);
    dispatch(fetchInventorySuccess(filteredData));
  };

  //function to disable row
  const handleDisable = (index) => {
    const updatedInventory = [...inventory];
    updatedInventory[index] = { ...updatedInventory[index], disabled: true };
    dispatch(fetchInventorySuccess(updatedInventory));
  };

  if(loading){
    return <LoadingSpinner/>
  }

  if(error){
    return <ErrorAlert message={"Something went wrong while fetching inventory data."}/>
  }

  return (
    <>
    <table
      className="min-w-[98%] bg-neutral-800 rounded-xl mx-3"
      aria-label="simple table"
    >
      <thead className="bg-neutral-800 rounded-xl">
        <tr className=" rounded-xl border-b border-stone-700">
          {tableHeaderContent.map((title) => (
            <th
              key={title}
              className="px-6 py-3 text-left text-lime-600 rounded-xl"
            >
              <span className="bg-neutral-950 px-4 py-2 rounded-xl">
                {title}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {inventory.map((row, index) => (
          <tr
            key={row.name}
            className={`rounded-xl ${
              index !== inventory.length - 1
                ? "border-b border-neutral-700"
                : ""
            } ${row.disabled && "bg-stone-600"}`}
          >
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {row.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-left text-white">
              {row.category}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-left text-white">
              {row.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-left text-white">
              {row.quantity}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-left text-white">
              {row.value}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-left">
              <div className="flex justify-start">
                <button disabled={isUser || row.disabled}>
                  <MdEdit
                    className={`cursor-pointer ${
                      !isUser ? "text-green-700" : "text-white"
                    }`}
                    onClick={()=>showModal(index)}
                  />
                </button>
                <button disabled={isUser}>
                  <IoEye
                    onClick={() => handleDisable(index)}
                    className={`mx-3 cursor-pointer ${
                      !isUser ? "text-purple-400" : "text-white"
                    }`}
                  />
                </button>
                <button disabled={isUser}>
                  <MdDelete
                    onClick={() => deleteRow(row.name)}
                    className={`cursor-pointer ${
                      !isUser ? "text-red-700" : "text-white"
                    }`}
                  />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
     {showEditModal && <EditProductModal index={selectedItemIndex} onClose={hideModal}/>}
    </>
  );
};

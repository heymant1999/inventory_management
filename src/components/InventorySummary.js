import React, { useEffect, useState } from "react";
import InventorySummaryCard from "./InventorySummaryCard";
import { useSelector } from "react-redux";
import { IoCart } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdCategory, MdRemoveShoppingCart } from "react-icons/md";

const InventorySummary = () => {
  const [storeSummaryData, setStoreSummaryData] = useState();
  const { inventory } = useSelector((state) => state.inventory);

  //function to calculate inventory summary data
  function calculateInventorySummaryData() {
    const categories = new Set();
    let totalProducts = 0;
    let totalValue = 0;
    let outOfStockItems = 0;

    inventory.forEach((item) => {
      if (item.disabled) return;
      categories.add(item.category);
      totalProducts += 1;
      totalValue += parseFloat(item.value.replace(/\$/, ""));
      if (parseInt(item.quantity) === 0) {
        outOfStockItems += 1;
      }
    });
    setStoreSummaryData({
      numberOfCategories: categories.size,
      totalProducts: totalProducts,
      totalStoreValue: totalValue,
      outOfStockItems: outOfStockItems,
    });
  }

  const summaryData = [
    {
      icon: IoCart,
      title: "Total products",
      value: storeSummaryData?.totalProducts,
    },
    {
      icon: RiExchangeDollarLine,
      title: "Total store value",
      value: storeSummaryData?.totalStoreValue,
    },
    {
      icon: MdRemoveShoppingCart,
      title: "Out of stocks",
      value: storeSummaryData?.outOfStockItems,
    },
    {
      icon: MdCategory,
      title: "No of category",
      value: storeSummaryData?.numberOfCategories,
    },
  ];

  useEffect(() => {
    calculateInventorySummaryData();
  }, [inventory, calculateInventorySummaryData]);

  return (
    <>
      <div className="text-white text-4xl mx-4 mt-5">Inventory Status</div>
      <div className="flex justify-between py-5 px-1">
        {summaryData.map((item, index) => (
          <InventorySummaryCard
            key={index}
            icon={item.icon}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>
    </>
  );
};

export default InventorySummary;

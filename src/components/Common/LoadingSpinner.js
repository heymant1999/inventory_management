import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center text-slate-300">
      <div className="border-t-4 border-b-4 border-slate-300 rounded-full w-12 h-12 animate-spin m-3"></div>
      Loading...
    </div>
  );
};

export default LoadingSpinner;

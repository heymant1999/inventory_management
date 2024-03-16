import React from "react";

const ErrorAlert = ({ message }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-red-500 text-white px-8 py-6 rounded-lg flex items-center space-x-4">
        <p>
          😞 {message} 😞
        </p>
      </div>
    </div>
  );
};

export default ErrorAlert;

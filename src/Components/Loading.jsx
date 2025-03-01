import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      <h1 className="font-semibold text-xl">Loading</h1>
    </div>
  );
};

export default Loading;

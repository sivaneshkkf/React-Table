import React, { useEffect, useState } from "react";

const Table = ({ productData, tableHead }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  // Handle Checkbox Click
  const handleCheckboxChange = (rowIndex) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(rowIndex)
        ? prevSelected.filter((index) => index !== rowIndex)
        : [...prevSelected, rowIndex]
    );
  };

  return (
    <div className="overflow-x-auto">
      <div className="bg-blue-600 rounded-t-2xl">
        <h1 className="text-xl text-white font-semibold uppercase text-center py-2">
          Product Details
        </h1>
      </div>
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            {tableHead.map((col, index) => (
              <th key={index} className="px-4 py-2 text-left border-b border-gray-300">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {productData.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white even:bg-gray-50 hover:bg-lime-200 hover:font-semibold">
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border-b border-gray-300">
                  {value? value: "N/A"}
                </td>
              ))}
              <td className="px-4 py-2 text-center border-b border-gray-300">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={() => handleCheckboxChange(rowIndex)}
                  className="w-4 h-4"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

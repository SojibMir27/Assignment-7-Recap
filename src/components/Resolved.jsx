import React from "react";

const Resolved = ({ item }) => {
  return (
    <>
      <div className="shadow rounded-md bg-green-100 px-2 py-1 mb-1 border border-gray-100 mt-2">
        <h3 className="font-bold mb-2 text-[#001931]">{item.title}</h3>

        <button type="button" className="text-green-700 text-sm">
          ✅Fixed
        </button>
      </div>
    </>
  );
};

export default Resolved;

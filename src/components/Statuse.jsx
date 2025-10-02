import React from "react";

const Statuse = ({ item, handleResolved }) => {
  return (
    <>
      {/* Statuse task */}
      <div className="shadow rounded-md bg-white p-3 space-y-2">
        <h3 className="font-bold mb-2 text-[#001931]">{item.title}</h3>
        <button
          onClick={() => handleResolved(item)}
          className="btn text-white font-bold w-full bg-[#02a53b]"
        >
          Completed
        </button>
      </div>

      {/* resolved task  */}

     
    </>
  );
};

export default Statuse;

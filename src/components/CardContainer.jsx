import React, { use, useState } from "react";
import Hero from "./Hero";
import Card from "./Card";
import Statuse from "./Statuse";
import { toast } from "react-toastify";
import Resolved from "./Resolved";

const CardContainer = ({ promise }) => {
  const data = use(promise);

  const [customer, setCustomer] = useState(data);

  const [progress, setProgress] = useState([]);

  const [resolved, setResolved] = useState([]);

  const handleAdd = (order) => {
    const isExsit = progress.find((item) => item.id === order.id);

    if (isExsit) {
      toast.error("Already Progresing!");
      return;
    }

    const newItem = [...progress, order];
    setProgress(newItem);
    toast.success("Successfully In Progress");
  };

  const handleResolved = (order) => {
    const resolvedData = [...resolved, order];
    setResolved(resolvedData);
    const remaining = progress.filter((item) => item.id !== order.id);
    setProgress(remaining);

    const remainingCustomar = customer.filter((item) => item.id !== order.id);
    setCustomer(remainingCustomar);
    toast.success("Resolved Success full");
  };

  return (
    <>
      <Hero
        progressTotal={progress.length}
        resolvedTotal={resolved.length}
      ></Hero>

      <section className="md:w-[1300px] mx-auto">
        <h1 className="p-1 ml-4 -mb-0  md:-mb-5 font-bold text-2xl text-[#34485a]">
          Customer Tickets
        </h1>

        <div className="grid grid-cols-12 gap-5 py-3">
          <div className="grid col-span-9 grid-cols-1 lg:grid-cols-2 gap-4 w-full p-5">
            {customer.map((card) => (
              <Card handleAdd={handleAdd} key={card.id} card={card}></Card>
            ))}
          </div>

          <div className="md:col-span-3 col-span-12 space-y-5">
            <div>
              <h1 className=" font-bold text-2xl text-[#34485a]">
                Task Status
              </h1>

              {progress.length === 0 ? (
                <p className="text-[#627382]">No tasks in Progress.</p>
              ) : (
                progress.map((item) => (
                  <Statuse
                    handleResolved={handleResolved}
                    key={item.id}
                    item={item}
                  ></Statuse>
                ))
              )}
            </div>

            <div>
              <h1 className="font-bold text-2xl  text-[#34485a]">
                Resolved Task
              </h1>

              {resolved.length === 0 ? (
                <p className="text-[#627382]">No Resolved Tasks Yet.</p>
              ) : (
                resolved.map((item) => (
                  <Resolved key={Math.random()} item={item}></Resolved>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardContainer;

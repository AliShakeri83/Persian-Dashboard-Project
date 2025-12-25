import React, { useEffect, useState } from "react";

export default function useDiscount() {
  const [allDiscount, setAllDiscount] = useState([]);

  const getAllDiscount = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/discounts");
      const data = await res.json();
      setAllDiscount(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDiscount = async (id) => {
    await fetch(`http://localhost:8000/api/v1/discounts/${id}`, {
      method: "DELETE",
    });
    getAllDiscount();
  };

  const addDiscount = async (newDiscount) => {
    await fetch("http://localhost:8000/api/v1/discounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDiscount),
    });
    getAllDiscount();
  };

  const updateDiscount = async (id, discountInfo) => {
    await fetch(`http://localhost:8000/api/v1/discounts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discountInfo),
    });
    getAllDiscount();
  };

  useEffect(() => {
    getAllDiscount();
  }, []);

  return {
    allDiscount,
    addDiscount,
    deleteDiscount,
    updateDiscount,
  };
}

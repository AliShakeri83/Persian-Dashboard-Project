import React, { useEffect, useState } from "react";

export default function useOrders() {
  const [allOrders, setAllOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/orders");
      const data = await res.json();
      setAllOrders(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (id) => {
    await fetch(`http://localhost:8000/api/v1/orders/${id}`, {
      method: "DELETE",
    });
    getAllOrders();
  };

  const addOrder = async (newOrder) => {
    await fetch("http://localhost:8000/api/v1/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    });
    getAllOrders();
  };

  const updateOrder = async (id, orderInfos) => {
    await fetch(`http://localhost:8000/api/v1/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfos),
    });
    getAllOrders();
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return {
    allOrders,
    addOrder,
    deleteOrder,
    updateOrder,
  };
}

import React, { useEffect, useState } from "react";

export default function useUsers() {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/users`);
      const result = await res.json();
      setAllUsers(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:8000/api/v1/users/${id}`, {
      method: "DELETE",
    });
    getAllUsers();
  };

  const addUser = async (newUser) => {
    await fetch("http://localhost:8000/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    getAllUsers();
  };

  const updateUser = async (id, userInfos) => {
    await fetch(`http://localhost:8000/api/v1/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfos),
    });
    getAllUsers();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return {
    allUsers,
    addUser,
    deleteUser,
    updateUser,
  };
}

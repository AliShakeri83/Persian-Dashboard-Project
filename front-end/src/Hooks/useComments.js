import { useEffect, useState } from "react";

export default function useComments() {
  const [allComments, setAllComments] = useState([]);

  const getAllComments = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/comments");
      const data = await res.json();

      setAllComments(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteComment = async (id) => {
    await fetch(`http://localhost:8000/api/v1/comments/${id}`, {
      method: "DELETE",
    });
    getAllComments();
  };

  const updateComment = async (id, commentInfos) => {
    await fetch(`http://localhost:8000/api/v1/comments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentInfos),
    });
    getAllComments();
  };

  useEffect(() => {
    getAllComments();
  }, []);

  return {
    allComments,
    deleteComment,
    updateComment,
  };
}

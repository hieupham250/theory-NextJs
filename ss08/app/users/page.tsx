"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Page() {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>Danh sách user</div>
      {users?.data?.map((user: any) => (
        <div key={user.id}>
          <p>id: {user.id}</p>
          <p>name: {user.name}</p>
        </div>
      ))}
    </>
  );
}

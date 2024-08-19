"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const isCheckLogin = true;
  const router = useRouter();

  const login = () => {
    if (isCheckLogin) {
      router.push("/home");
    }
  };
  return (
    <div>
      trang đăng nhập
      <button onClick={login}>Login</button>
    </div>
  );
}

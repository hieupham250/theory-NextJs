import Link from "next/link";
import React from "react";

export default function User() {
  return (
    <div>
      <Link href={"/auth/login"}>Login</Link>
    </div>
  );
}

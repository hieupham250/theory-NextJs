import React from "react";
import Button from "@/components/Button"; // dùng "@/" nhanh hơn mà ko cần "../"
import Helpers from "@/utils/Helpers";

export default function Dashboard() {
  return (
    <div>
      <Button></Button>
      <Helpers></Helpers>
    </div>
  );
}

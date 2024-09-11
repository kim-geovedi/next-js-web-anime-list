"use client";
import Tombol from "@/components/Tombol";
import { useState } from "react";

export default function Profile() {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <>
      <Tombol sendDataToParent={handleDataFromChild} />
      <p>{dataFromChild}</p>
    </>
  );
}

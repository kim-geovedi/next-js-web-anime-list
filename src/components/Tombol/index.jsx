import React, { useState } from "react";

const Tombol = async ({ sendDataToParent }) => {
  const [inputData, setInputData] = useState("");

  const sendData = () => {
    sendDataToParent(inputData); // Kirim data ke parent
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Masukkan data"
      />
      <button onClick={sendData}>Kirim Data ke Parent</button>
    </div>
  );
};

export default Tombol;

import { Scanner } from "@yudiel/react-qr-scanner";
import React, { useState } from "react";

export default function Qrscanner() {
  const [message, setMessage] = useState("");
  const [lastScanned, setLastScanned] = useState(null);

  const handleScan = async (result) => {
    if (!result) return;

    const qrData = result[0]?.rawValue;

    // Prevent multiple scans of same QR
    if (qrData === lastScanned) return;
    setLastScanned(qrData);

    try {
      const response = await fetch(
        `${qrData}`, // safer than full URL in QR
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Check-in successful");
      } else {
        setMessage("⚠️ " + data.message);
      }
    } catch (err) {
      setMessage("❌ Network error");
      console.log(err);
    }

    // Allow scanning again after 2 sec
    setTimeout(() => setLastScanned(null), 2000);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Event Check-in Scanner</h2>

      <Scanner
        onScan={handleScan}
        onError={(e) => console.error(e)}
        constraints={{ facingMode: { ideal: "environment" } }} // back camera
        styles={{ container: { width: 300, margin: "auto" } }}
      />

      <h3>{message}</h3>
    </div>
  );
}

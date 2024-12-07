import React, { useState } from "react";
import QRCode from "react-qr-code"; // Use react-qr-code instead

const BuyPage = () => {
  const [showQR, setShowQR] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState("");

  const handleGenerateQR = () => {
    setShowQR(true);
    setTransactionMessage("");
  };

  const qrData = `TransactionID: TXN-${Math.random()
    .toString(36)
    .substr(2, 10)
    .toUpperCase()}`;

  return (
    <div style={styles.container}>
      <h2>Payment Options</h2>
      <div style={styles.buttonGroup}>
        <button style={styles.qrButton} onClick={handleGenerateQR}>
          Generate QR
        </button>
      </div>
      {showQR && (
        <div style={styles.qrCode}>
          <QRCode value={qrData} />
        </div>
      )}
      {transactionMessage && (
        <div style={styles.successMessage}>
          <p>{transactionMessage}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "20px 0",
  },
  qrButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  qrCode: {
    marginTop: "20px",
    border: "1px solid #ccc",
    padding: "50px",
    borderRadius: "5px",
    display: "inline-block",
  },
  successMessage: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#28a745",
    color: "white",
    borderRadius: "5px",
    fontSize: "18px",
  },
};

export default BuyPage;

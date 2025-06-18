import { useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import axios from "axios";

export default function QRScanner() {
  const [userData, setUserData] = useState(null);
  const [scannedId, setScannedId] = useState(null);
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  const [cameraDenied, setCameraDenied] = useState(false);

  const readerRef = useRef(null);
  const html5QrCodeRef = useRef(null);
  const isScannerRunning = useRef(false);
const [verified, setVerified] = useState(false);
 const baseURL = import.meta.env.VITE_API_BASE_URL
  const startScanner = async () => {
    if (!readerRef.current) return;

    try {
      html5QrCodeRef.current = new Html5Qrcode(readerRef.current.id);
      const devices = await Html5Qrcode.getCameras();

      if (devices.length === 0) {
        alert("No camera found.");
        return;
      }

      await html5QrCodeRef.current.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        async (decodedText) => {
          if (isScannerRunning.current) {
            isScannerRunning.current = false;
            await html5QrCodeRef.current.stop().catch(console.warn);
          }

          setScannedId(decodedText);
          try {
         // Inside QRScanner.jsx
          // const res = await axios.get(`http://localhost:5000/api/user/${decodedText}`);
;
const res = await axios.get(`${baseURL}/api/user/${decodedText}`);


            setUserData(res.data);
          } catch (err) {
            alert("User not found.");
            console.error(err);
          }
        }
      );

      isScannerRunning.current = true;
      setCameraDenied(false);
    } catch (err) {
      console.error("Camera access denied or error:", err);
      setCameraDenied(true);
    }
  };

  const handlePermissionAndStart = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());
      setIsScannerVisible(true);
      setTimeout(startScanner, 300);
    } catch (error) {
      console.error("Camera permission denied:", error);
      setCameraDenied(true);
    }
  };

  const stopScanner = async () => {
    if (html5QrCodeRef.current && isScannerRunning.current) {
      try {
        await html5QrCodeRef.current.stop();
        await html5QrCodeRef.current.clear();
        isScannerRunning.current = false;
        setIsScannerVisible(false);
      } catch (err) {
        console.warn("Failed to stop scanner:", err);
      }
    }
  };

  return (
    <section id="Scanner">
       <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">

       <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-10 text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.6)]"
  >
    QR Code<span className="text-cyan-300"> Scanner</span>
  </h2>
 <p className="mt-3 text-sm text-white text-center italic mb-5">
  ( If you're facing any difficulty while scanning, please try again by <span className="underline underline-offset-2">refreshing</span> the page. )
</p>
      {!isScannerVisible && (
        <button
          onClick={handlePermissionAndStart}
          className="bg-cyan-500 px-4 py-2 rounded hover:bg-cyan-600"
        >
          Start Scanning
        </button>
      )}

      {cameraDenied && (
        <p className="mt-4 text-red-400">
          ❌ Camera access was denied. Please allow permission to scan QR codes.
        </p>
      )}

      {isScannerVisible && (
        <>
          <div id="reader" ref={readerRef} className="w-[300px] h-[300px] bg-white mt-4"></div>
          <button
            onClick={stopScanner}
            className="mt-4 bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Stop Scanning
          </button>
        </>
      )}

      {scannedId && !userData && (
        <p className="mt-4 text-yellow-300">🔍 Fetching user data...</p>
      )}

  {userData && !verified && (
  <div className="mt-8 px-6 py-5 w-full max-w-md rounded-2xl backdrop-blur-md border border-cyan-400/30 shadow-xl bg-white/10 text-white transition-all duration-300">
    <h3 className="text-5xl font-extrabold text-center mb-10 text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.6)]">
      Registration <span className="text-cyan-300">Details</span>
    </h3>
    <div className="space-y-2 text-base leading-relaxed text-white/90">
      <p><strong className="text-cyan-200">Fest:</strong> College Fest 2025</p>
      <p><strong className="text-cyan-200">Name:</strong> {userData.name}</p>
      <p><strong className="text-cyan-200">Roll No:</strong> {userData.rollNumber}</p>
      <p><strong className="text-cyan-200">College:</strong> {userData.college}</p>
      <p><strong className="text-cyan-200">Gender:</strong> {userData.gender}</p>
      <p><strong className="text-cyan-200">Department:</strong> {userData.department}</p>
      <p><strong className="text-cyan-200">Year:</strong> {userData.year}</p>
      <p><strong className="text-cyan-200">Type:</strong> {userData.type}</p>
      {userData.events?.length > 0 && (
        <p><strong className="text-cyan-200">Events:</strong> {userData.events.join(", ")}</p>
      )}
    </div>

    <button
      onClick={() => {
        setVerified(true);
        setTimeout(() => {
          setUserData(null);
          setScannedId(null);
          handlePermissionAndStart();
          setVerified(false);
        }, 2000); // 2s delay before reset
      }}
      className="mt-6 w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg"
    >
      ✅ Allowed
    </button>
  </div>
)}

{verified && (
  <div className="text-center text-green-400 font-bold text-2xl animate-bounce mt-6">
    ✅ Verified & Entry Allowed!
  </div>
)}



    </div> 
    </section>
    
  );
}

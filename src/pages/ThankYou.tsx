import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import thanku from '../assets/thankyou/thankyou.mp4';

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to homepage after 5 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-[10%]">
      <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
      <video
        src={thanku}
        autoPlay
        loop
        muted
        className="w-[30%] h-[30%] object-cover"
      />
      <p className="mt-4 text-gray-600">Redirecting to homepage...</p>
    </div>
  );
};

export default ThankYou;

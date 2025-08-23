import React from "react";

// Primary Button
export const PrimaryButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
};

// Secondary Button
export const SecondaryButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border border-gray-400 text-gray-800 rounded-lg hover:bg-gray-100 transition"
    >
      {children}
    </button>
  );
};

// Danger Button
export const DangerButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
    >
      {children}
    </button>
  );
};

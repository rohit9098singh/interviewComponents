import React from 'react';

type messageProps = {
  message: string,
  type: "success" | "error" | "info";
}
const ToastContainer = ({ message, type }: messageProps) => {
  const bgColor =
    type === 'success' ? 'bg-green-500'
      : type === 'error' ? 'bg-red-500'
        : 'bg-blue-500';

  return (
    <div className={`fixed top-5 right-5 px-4 py-2 rounded text-white shadow-md ${bgColor}`}>
      {message}
    </div>
  );
};

export default ToastContainer;

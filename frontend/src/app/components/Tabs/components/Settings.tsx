import React from "react";

const Settings = ({ data, setData, error }:any) => {
  const handleChange = (e:any) => {
    setData({ theme: e.target.value });
  };

  return (
    <div className="space-y-4 max-w-md">
      <div className="flex gap-2 items-center">
        <label className="font-bold w-24 text-lg">Theme:</label>
        <select
          name="theme"
          value={data.theme}
          onChange={handleChange}
          className="border border-gray-400 rounded-md p-2 w-full"
        >
          <option value="">Select</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;

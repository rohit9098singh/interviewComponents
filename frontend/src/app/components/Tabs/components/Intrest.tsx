import React from "react";

const Interest = ({ data, setData, error }:any) => {
  const handleChange = (e:any) => {
    setData({ hobbie: e.target.value });
  };

  return (
    <div className="space-y-4 max-w-md">
      <div className="flex gap-2 items-center">
        <label className="font-bold w-24 text-lg">Hobbies:</label>
        <input
          type="text"
          name="hobbie"
          value={data.hobbie}
          onChange={handleChange}
          className="border border-gray-400 rounded-md p-2 w-full"
        />
      </div>
    </div>
  );
};

export default Interest;

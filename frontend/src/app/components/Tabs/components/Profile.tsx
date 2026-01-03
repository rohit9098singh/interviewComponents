import React from "react";

const Profile = ({ data, setData, error }:any) => {
  const handleChange = (e:any) => {
    const {name,value}=e.target;
    setData((prev:any)=>(
      {...prev,[name]:value}
    ))
    // setData((prev:any) => ({
    //   ...prev,
    //   [e.target.name]: e.target.value,
    // }));
  };

// 
  return (
    <div className="space-y-4 max-w-md">
      <div className="flex gap-2 items-center">
        <label className="font-bold w-24 text-lg">Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="border border-gray-400 rounded-md p-2 w-full"
        />
      </div>
      <div className="flex gap-2 items-center">
        <label className="font-bold w-24 text-lg">Email:</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
          className="border border-gray-400 rounded-md p-2 w-full"
        />
      </div>
      <div className="flex gap-2 items-center">
        <label className="font-bold w-24 text-lg">Age:</label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
          className="border border-gray-400 rounded-md p-2 w-full"
        />
      </div>
      
    </div>
  );
};

export default Profile;



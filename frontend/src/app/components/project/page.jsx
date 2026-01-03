"use client"
import React, { useState } from "react";

export const employeeData = [
  {
    id: 1,
    name: "Ravi Sharma",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    email: "ravi.sharma@example.com",
    phone: "+91-9876543210",
    address: "123 MG Road, Delhi, India",
    age: 28,
    dob: "1997-05-21",
  },
  {
    id: 2,
    name: "Priya Mehta",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    email: "priya.mehta@example.com",
    phone: "+91-9123456789",
    address: "456 LBS Marg, Mumbai, India",
    age: 25,
    dob: "1999-03-15",
  },
];

const Page = () => {
  const [profileData, setProfileData] = useState(employeeData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    imageUrl: "",
    phone: "",
    address: "",
    age: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newEmployee = {
      id: profileData.length + 1,
      ...userData,
    };

    setProfileData([...profileData, newEmployee]);
    setUserData({
      name: "",
      email: "",
      imageUrl: "",
      phone: "",
      address: "",
      age: "",
      dob: "",
    });
    setOpenModal(false);
  };

  const user = profileData.find((item) => item.id === selectedItem);

  return (
    <div className="min-h-screen w-full relative">
      <div className="max-w-7xl mx-auto mt-20">
        <div className="flex justify-between mb-4">
          <h1 className="font-bold text-2xl">Employee List </h1>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-green-500 rounded-md px-4 py-2 shadow-md cursor-pointer"
          >
            Add Employee
          </button>
        </div>
        <div className="border border-gray-400 p-4 flex">
          {/* Sidebar list */}
          <div className="w-[20%] flex flex-col gap-4 border-r-black border px-4">
            {profileData.map((data) => (
              <div
                onClick={() => setSelectedItem(data.id)}
                key={data.id}
                className="border border-black p-4 flex gap-4 rounded-md cursor-pointer"
              >
                <img
                  src={data.imageUrl}
                  className="rounded-full h-8 w-8"
                  alt={data.name}
                />
                <p>{data.name}</p>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="w-[80%] flex flex-col gap-4 justify-center items-center">
            {user ? (
              <>
                <img
                  src={user.imageUrl}
                  className="h-40 w-40 rounded-full"
                  alt={user.name}
                />
                <p className="font-bold text-xl">{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.address}</p>
                <p>Age: {user.age}</p>
                <p>DOB: {user.dob}</p>
              </>
            ) : (
              <p>Select an employee to view details</p>
            )}
          </div>
        </div>

        {/* Modal */}
        {openModal && (
          <div className="bg-black/50 inset-0 flex justify-center items-center absolute">
            <div className="bg-white rounded-md max-w-md p-4 flex flex-col space-y-4 w-full">
              <div className="flex gap-2">
                <label className="w-20">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="px-2 border border-gray-400 flex-1"
                />
              </div>
              <div className="flex gap-2">
                <label className="w-20">Email</label>
                <input
                  type="text"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="px-2 border border-gray-400 flex-1"
                />
              </div>
              <div className="flex gap-2">
                <label className="w-20">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="px-2 border border-gray-400 flex-1"
                />
              </div>
              <div className="flex gap-2">
                <label className="w-20">Address</label>
                <input
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  className="px-2 border border-gray-400 flex-1"
                />
              </div>
              <div className="flex gap-2">
                <label className="w-20">Age</label>
                <input
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleChange}
                  className="px-2 border border-gray-400 flex-1"
                />
              </div>
              <div className="flex gap-2">
                <label className="w-20">DOB</label>
                <input
                  type="date"
                  name="dob"
                  value={userData.dob}
                  onChange={handleChange}
                  className="px-2 border border-gray-400 flex-1"
                />
              </div>
              <div className="flex gap-2">
                <label className="w-20">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  value={userData.imageUrl}
                  onChange={handleChange}
                  className="px-2 border border-gray-400 flex-1"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setOpenModal(false)}
                  className="bg-gray-400 rounded-md px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 rounded-md px-4 py-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;

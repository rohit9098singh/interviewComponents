"use client";
import React, { useState } from "react";
import { employeeData } from "./data/data";

const Employee = () => {
  const [data, setData] = useState(employeeData);
  const [selectedProfile, setSelectedProfile] = useState(1);
  const [modal, setModal] = useState(false);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    age: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newEmployee,
      id: data.length + 1,
    };
    setData((prev) => [...prev, newEntry]);
    setModal(false);
    setNewEmployee({
      name: "",
      email: "",
      phone: "",
      address: "",
      dob: "",
      age: "",
      imageUrl: "",
    });
  };

  const selected = data.find((emp) => emp.id === selectedProfile);
  return (
    <div className="flex flex-col gap-10 p-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Employee Table</h1>
        <button
          onClick={() => setModal(true)}
          className="bg-gray-200 rounded-md px-6 py-4 font-bold hover:bg-gray-400 duration-300"
        >
          Add Employee
        </button>
      </div>

      <div className="border-2 border-black flex relative">
        <section className="flex flex-col gap-4 p-3 border-black">
          {data.map((employee) => (
            <div
              key={employee.id}
              onClick={() => setSelectedProfile(employee.id)}
              className="flex gap-4 items-center cursor-pointer border-b-2 border-black w-full"
            >
              <img
                src={employee?.imageUrl}
                alt={employee.name}
                className="rounded-full h-10 w-10"
              />
              <p className="font-semibold flex-wrap">{employee.name}</p>
            </div>
          ))}
        </section>

        <section className="border-2 border-black w-full p-4">
          {selected && (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <img
                  src={selected.imageUrl}
                  alt={selected.name}
                  className="rounded-full w-44 h-44"
                />
              </div>
              <div className="flex justify-center flex-col items-center gap-4">
                <p className="font-bold text-xl">{selected.name}</p>
                <p>Email: {selected.email}</p>
                <p>Phone: {selected.phone}</p>
                <p>Age: {selected.age}</p>
                <p>DOB: {selected.dob}</p>
                <p>Address: {selected.address}</p>
              </div>
            </div>
          )}
        </section>
      </div>

      {modal && (
        <div className="inset-0 bg-black/80 absolute flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-md flex flex-col gap-4 w-96"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newEmployee.name}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={newEmployee.phone}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={newEmployee.address}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={newEmployee.dob}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={newEmployee.age}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
              required
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={newEmployee.imageUrl}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md"
            />

            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={() => setModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Employee;

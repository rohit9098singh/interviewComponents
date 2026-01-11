"use client";
import React, { ChangeEvent, useState } from "react";
import { employeeData } from "./data/data";

type Employee = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  age: "" | number;
  imageUrl: string;
};

/* Form type (imageFile instead of imageUrl) */
type EmployeeForm = {
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
  age: "" | number;
  imageFile: File | null;
};

const Employee = () => {
  const [data, setData] = useState<Employee[]>(employeeData);
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);
  const [modal, setModal] = useState(false);

  const [newEmployee, setNewEmployee] = useState<EmployeeForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    age: "",
    imageFile: null,
  });

  /* ---------- Handlers ---------- */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setNewEmployee((prev) => ({
      ...prev,
      imageFile: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imageUrl = newEmployee.imageFile
      ? URL.createObjectURL(newEmployee.imageFile)
      : "https://via.placeholder.com/150";

    const newEntry: Employee = {
      id: Date.now(),
      name: newEmployee.name,
      email: newEmployee.email,
      phone: newEmployee.phone,
      address: newEmployee.address,
      dob: newEmployee.dob,
      age: newEmployee.age,
      imageUrl,
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
      imageFile: null,
    });
  };

  const selected = data.find((emp) => emp.id === selectedProfile);

  /* ---------- UI ---------- */

  return (
    <div className="flex flex-col gap-10 p-8 relative">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Employee Table</h1>
        <button
          onClick={() => setModal(true)}
          className="bg-gray-200 rounded-md px-6 py-4 font-bold hover:bg-gray-400 duration-300"
        >
          Add Employee
        </button>
      </div>

      <div className="border-2 border-black flex">
        {/* Employee List */}
        <section className="flex flex-col gap-4 p-3 border-r-2 border-black w-64">
          {data.map((employee) => (
            <div
              key={employee.id}
              onClick={() => setSelectedProfile(employee.id)}
              className="flex gap-4 items-center cursor-pointer border-b-2 border-black"
            >
              <img
                src={employee.imageUrl}
                alt={employee.name}
                className="rounded-full h-10 w-10"
              />
              <p className="font-semibold">{employee.name}</p>
            </div>
          ))}
        </section>

        {/* Employee Details */}
        <section className="w-full p-6">
          {selected ? (
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <img
                  src={selected.imageUrl}
                  alt={selected.name}
                  className="rounded-full w-44 h-44 object-cover"
                />
              </div>
              <div className="text-center flex flex-col gap-2">
                <p className="font-bold text-xl">{selected.name}</p>
                <p>Email: {selected.email}</p>
                <p>Phone: {selected.phone}</p>
                <p>Age: {selected.age}</p>
                <p>DOB: {selected.dob}</p>
                <p>Address: {selected.address}</p>
              </div>
            </div>
          ) : (
            <p>Select an employee</p>
          )}
        </section>
      </div>

      {/* ---------- Modal ---------- */}
      {modal && (
        <div className="inset-0 bg-black/80 absolute flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-md flex flex-col gap-4 w-96"
          >
            <input
              name="name"
              placeholder="Name"
              value={newEmployee.name}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
            <input
              name="phone"
              placeholder="Phone"
              value={newEmployee.phone}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
            <input
              name="address"
              placeholder="Address"
              value={newEmployee.address}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
            <input
              type="date"
              name="dob"
              value={newEmployee.dob}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />
            <input
              type="number"
              name="age"
              value={newEmployee.age}
              onChange={handleChange}
              className="border p-3 rounded-md"
              required
            />

            {/* FILE INPUT */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border p-3 rounded-md"
            />

            {/* IMAGE PREVIEW */}
            {newEmployee.imageFile && (
              <img
                src={URL.createObjectURL(newEmployee.imageFile)}
                alt="preview"
                className="h-24 w-24 rounded-full object-cover mx-auto"
              />
            )}

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

"use client";
import React, { useState } from "react";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Interest from "./components/Intrest";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [profileData, setProfileData] = useState({
    email: "",
    name: "",
    age: "",
  });

  const [settingsData, setSettingsData] = useState({ theme: "" });
  const [interestData, setInterestData] = useState({ hobbie: "" });

  const [errors, setErrors] = useState<{ [key: number]: string }>({});

  const profileValidation = () => {
    const { email, name, age } = profileData;
    if (!email || !name || !age) return "All profile fields are required";
    if (!email.includes("@")) return "Invalid email address";
    if (Number(age) <= 0) return "Age must be a positive number";
    return "";
  };

  const settingsValidation = () => {
    if (!settingsData.theme) return "Theme is required";
    return "";
  };

  const interestValidation = () => {
    if (!interestData.hobbie) return "Please enter your hobbies";
    return "";
  };

  const validation = [profileValidation, settingsValidation, interestValidation];

  const handleNext = () => {
    const currentValidation = validation[activeTab];
    const errorMsg = currentValidation();

    if (errorMsg) {
      setErrors({ [activeTab]: errorMsg });
      return;
    }

    setErrors({});
    setActiveTab((prev) => Math.min(prev + 1, 2));
  };

  const handlePrevious = () => {
    setActiveTab((prev) => Math.max(prev - 1, 0));
    setErrors({});
  };

  const handleSubmit = () => {
    const errorMsg = validation[activeTab]();
    if (errorMsg) {
      setErrors({ [activeTab]: errorMsg });
      return;
    }

    const allData = {
      profile: profileData,
      settings: settingsData,
      interest: interestData,
    };

    console.log("Submitted Data:", allData);
    alert("Form submitted successfully!");

    // Optional: Reset
    setProfileData({ email: "", name: "", age: "" });
    setSettingsData({ theme: "" });
    setInterestData({ hobbie: "" });
    setActiveTab(0);
    setErrors({});
  };

  const tabsContent = [
    {
      name: "Profile",
      content: (
        <Profile data={profileData} setData={setProfileData} error={errors[0]} />
      ),
    },
    {
      name: "Settings",
      content: (
        <Settings data={settingsData} setData={setSettingsData} error={errors[1]} />
      ),
    },
    {
      name: "Interest",
      content: (
        <Interest data={interestData} setData={setInterestData} error={errors[2]} />
      ),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl mb-4">Tabs</h1>

      <div className="flex gap-4 mb-6">
        {tabsContent.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md font-semibold ${
              activeTab === index ? "bg-blue-500 text-white" : "bg-gray-400"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="border rounded-md p-4">{tabsContent[activeTab].content}</div>

      {errors[activeTab] && (
        <p className="text-red-500 mt-2">{errors[activeTab]}</p>
      )}
      <div className="flex gap-4 mt-4">
        {activeTab > 0 && (
          <button
            onClick={handlePrevious}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Prev
          </button>
        )}

        {activeTab < tabsContent.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Tabs;

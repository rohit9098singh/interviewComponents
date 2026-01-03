"use client"
import React, { useState } from 'react';

const CheckboxSelector = () => {
  const names = ['Apple', 'Banana', 'Cherry', 'Date'];
  const [selected, setSelected] = useState([]);

  // Handle individual checkbox toggle
  const handleCheckboxChange = (name) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  // Handle Select All button
  const handleSelectAll = () => {
    setSelected(names);
  };

  const allSelected = selected.length === names.length;

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <h2>Fruits</h2>
      {names.map((name) => (
        <div key={name}>
          <label>
            <input
              type="checkbox"
              checked={selected.includes(name)}
              onChange={() => handleCheckboxChange(name)}
            />
            {name}
          </label>
        </div>
      ))}

      <button onClick={handleSelectAll} disabled={allSelected}>
        Select All
      </button>

      <h3>Selected ({selected.length})</h3>
      <ul>
        {selected.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxSelector;

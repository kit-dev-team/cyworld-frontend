'use client';

import React, { useState } from 'react';
import './DropDown.css';

const DropDown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("곡명");

  const options: string[] = ["곡명", "가수명"];

  const onSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
  }

  return (
    <div className="dropdown-wrapper">
      <button className="dropdown-toggle" onClick={() => setOpen(!open)}>
        <span className="label">{selected}</span>
        <span className="arrow">▼</span>
      </button>
      <ul className={`dropdown-menu ${open ? "show" : ""}`}>
        {options.map((option) => (
          <li key={option} onClick={() => onSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
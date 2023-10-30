import React, { useState } from 'react';


const NameForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [color, setColor] = useState<string>('black');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className="name-form">
      <label htmlFor="name">Nom</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="color"
        id="color"
        value={color}
        onChange={handleColorChange}
      />
      <p style={{ color: color }}>{name.toUpperCase()}</p>
    </div>
  );
};

export default NameForm;

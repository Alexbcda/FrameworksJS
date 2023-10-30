import React from 'react';


const List: React.FC = () => {
  const names: string[] = ["Thomas", "Yoann", "Aly", "Jeremy"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>
          {name}
        </li>
      ))}
    </ul>
  );
};

export default List;

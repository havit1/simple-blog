import React from 'react';
import { Link } from 'react-router-dom';

const Sections = () => {
  const [sections, setSections] = React.useState([
    { name: 'Section 1', id: 1 },
    { name: 'Section 2', id: 2 },
    { name: 'Section 3', id: 3 },
  ]);

  return (
    <div>
      {sections.length > 0 ? (
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <Link to={`sections/${section.id}/1`}>{section.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Sections;

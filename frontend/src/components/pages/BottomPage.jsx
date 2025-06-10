import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCode, FaServer, FaTools, FaDatabase, FaCloud, FaBookOpen } from 'react-icons/fa';

const categoryIcons = {
  Programming: <FaCode className="text-blue-400" />,
  Frameworks: <FaBookOpen className="text-green-400" />,
  Database: <FaDatabase className="text-purple-400" />,
  Cloud: <FaCloud className="text-indigo-400" />,
  Tools: <FaTools className="text-yellow-400" />,
};

export default function BottomPage() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/skills')
      .then(response => setSkills(response.data))
      .catch(error => console.error('Error fetching skills:', error));
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    const { category } = skill;
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        Skills Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedSkills).map(([category, items]) => (
          <div key={category} className="bg-white bg-opacity-80 rounded-2xl shadow-md p-5">
            <div className="flex items-center gap-3 mb-4">
              {categoryIcons[category] || <FaTools className="text-gray-500" />}
              <h2 className="text-xl font-semibold text-gray-800">{category}</h2>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {items.map(skill => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
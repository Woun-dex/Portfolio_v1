import React from 'react';

interface SkillsProps {
  name: string;
}

const Skills = ({ name }: SkillsProps) => {
  return (
    <div className="flex gap-2">
      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-400">
        {name}
      </div>
    </div>
  );
};

export default Skills;
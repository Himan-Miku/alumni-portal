import React from "react";
import { LuDot } from "react-icons/lu";
export interface Skillsprops {
  skills: string[];
  expertise: string[];
}
const Skills: React.FC<Skillsprops> = ({ skills, expertise }) => {
  return (
    <div className="flex flex-col bg-white w-[800px] rounded-2xl p-4 justify-between  gap-8">
      <div className="flex justify-between w-full text-xl font-[500] p-2 ">
        <h2 className="text-muted-foreground font-[550]">Expertise</h2>
        <div className="flex flex-wrap gap-2 ml-16 justify-end">
          {expertise.map((expertiseItem, index) => (
            <React.Fragment key={index}>
              <span className="bg-gray-200/60 p-3 rounded-lg font-[550]">
                {expertiseItem}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full text-xl font-[500]  p-2  ">
        <h2 className="text-muted-foreground font-[550]">Skills</h2>
        <div className="flex flex-wrap gap-2 ml-24 justify-end ">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <span className="font-[550]">{skill}</span>
              {index < skills.length - 1 && <LuDot className="w-6 h-6" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

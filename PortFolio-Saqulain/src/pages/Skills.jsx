import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import SkillCard from "../components/Skillcard";

const Skills = () => {

  const frontend = [
    {
      id: 1,
      title: "HTML 5",
      logo: <IoLogoHtml5 size={40} />,
      category: "frontend"
    },
    {
      id: 2,
      title: "CSS 3",
      logo: <IoLogoCss3 size={40} />,
      category: "frontend"
    },
    {
      id: 3,
      title: "JavaScript",
      logo: <IoLogoJavascript size={40} />,
      category: "frontend"
    },
    {
      id: 4,
      title: "React Js",
      logo: <IoLogoReact size={40} />,
      category: "frontend"
    },
    {
      id: 5,
      title: "Tailwind CSS",
      logo: <SiTailwindcss size={40} />,
      category: "frontend"
    }
  ];

  const backend = [
    {
      id: 1,
      title: "Node Js",
      logo: <FaNodeJs size={40} />,
      category: "backend"
    },
    {
      id: 2,
      title: "Express Js",
      logo: <SiExpress size={40} />,
      category: "backend"
    }
  ];

  const database = [
    {
      id: 1,
      title: "Mongo DB",
      logo: <SiMongodb size={40} />,
      category: "database"
    },
    {
      id: 2,
      title: "My SQL",
      logo: <SiMysql size={40} />,
      category: "database"
    }
  ];

  const languages = [
    {
      id: 1,
      title: "C++",
      logo: <SiCplusplus size={40} />,
      category: "language"
    }, 
    {
      id: 2,
      title: "Java",
      logo: <FaJava size={40} />,
      category: "language"
    },
    {
      id: 3, // Fixed duplicate ID
      title: "Python",
      logo: <FaPython size={40} />,
      category: "language"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing digital experiences
          </p>
        </div>

        {/* Frontend Skills */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
            Frontend Development
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {frontend.map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                logo={skill.logo}
                category={skill.category}
              />
            ))}
          </div>
        </section>

        {/* Backend Skills */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
            Backend Development
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {backend.map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                logo={skill.logo}
                category={skill.category}
              />
            ))}
          </div>
        </section>

        {/* Database Skills */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
            Databases
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {database.map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                logo={skill.logo}
                category={skill.category}
              />
            ))}
          </div>
        </section>

        {/* Programming Languages */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
            Programming Languages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {languages.map((skill) => (
              <SkillCard
                key={skill.id}
                title={skill.title}
                logo={skill.logo}
                category={skill.category}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
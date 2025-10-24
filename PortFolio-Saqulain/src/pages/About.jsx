import Education from '../components/Education'
import intermediate from '../assets/sunbeamlogo.png'
import highersecondary from '../assets/sfcslogo.jpg'
import graduation from '../assets/ajulogo.jpeg'

const About = () => {

  const eduData = [
    {
      id: 1,
      title: "Higher Secondary",
      image: highersecondary,
      score: "82%",
      rollNo: "5078398",
      duration: "2016-18",
      institution: "Sunflower Convent School",
      degree: "Class 10th"
    },
    {
      id: 2,
      title: "Intermediate",
      image: intermediate,
      score: "79.6%",
      rollNo: "5078398",
      duration: "2018-20",
      institution: "Sunbeam School",
      degree: "Class 12th"
    },
    {
      id: 3,
      title: "B.Tech (CSE)",
      image: graduation,
      score: "75.4%",
      rollNo: "BTCS-069",
      duration: "2021-25",
      institution: "Arka Jain University",
      degree: "Engineering"
    }
  ]

  return (
    <div className='min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
          Education
        </h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          My academic journey and qualifications that have shaped my career path.
        </p>
      </div>

      {/* Education Cards Grid */}
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {eduData.map((item) => (
            <div 
              key={item.id} 
              className='flex justify-center items-stretch'
            >
              <Education 
                title={item.title}
                image={item.image}
                score={item.score}
                rollNo={item.rollNo}
                duration={item.duration}
                institution={item.institution}
                degree={item.degree}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Additional About Section */}
      <div className='max-w-4xl mx-auto mt-16 bg-white rounded-2xl shadow-sm p-6 sm:p-8'>
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center'>
          About Me
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div>
            <p className='text-gray-700 text-lg leading-relaxed mb-4'>
              I'm a passionate front-end developer with a strong foundation in computer science. 
              My academic journey has equipped me with both theoretical knowledge and practical 
              skills to create amazing digital experiences.
            </p>
            <p className='text-gray-700 text-lg leading-relaxed'>
              Currently pursuing my B.Tech in Computer Science, I'm constantly learning and 
              adapting to new technologies to stay at the forefront of web development.
            </p>
          </div>
          <div className='bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-6 text-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-3'>Quick Facts</h3>
            <ul className='text-gray-700 space-y-2 text-left'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full mr-3'></span>
                Passionate about clean code
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full mr-3'></span>
                Love solving complex problems
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full mr-3'></span>
                Continuous learner
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full mr-3'></span>
                Team player
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
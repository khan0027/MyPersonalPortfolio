import Education from '../components/Education'
import intermediate from '../assets/intermediate.jpg'
import highersecondary from '../assets/highersecondary.jpg'
import graduation from '../assets/graduation.jpg'

const About = () => {

  const eduData = [
    {id:1,title:"Higher Secondary",image:highersecondary,score:"82%",rollNo:"5078398", duration:"2016-18", institution:"Sunflower Convent School",degree:"Class 10th" },
    {id:2,title:"Intermediate",image:intermediate,score:"79.6%",rollNo:"5078398", duration:"2018-20", institution:"Sunbeam School",degree:"Class 12th"  },
    {id:3,title:"B.Tech (CSE)",image:graduation,score:"75.4%",rollNo:"BTCS-069", duration:"2021-25", institution:"Arka Jain University",degree:"Engineering"  }
  ]


  return (
    <div className='flex flex-row justify-center items-center h-full gap-5 ' >
        {eduData.map((item)=>{
          return(
          <div key={item.id}  className='flex flex-row justify-center items-center' >
            <Education title={item.title} image={item.image} score={item.score} rollNo={item.rollNo} duration={item.duration} institution={item.institution} degree={item.degree} />
          </div>)
        })}
      <div>

      </div>
    </div>
  )
}

export default About
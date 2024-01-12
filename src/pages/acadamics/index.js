import Layout from '@/components/layout/layout'
import Academic from '@/components/website/academic'
import React, { useState } from 'react'
import AcadamicsBanner from './acadamicsbanner'

function Acadamics() {
    const [academicvisible,setAcademicvisible] =useState(false);
    const acadamicData= [
        {
            id: 1,
            image:'mkt-patrick-salinas2.svg',
            name:'Dr. Mary Ann Maxwell',
            heading: 'Central Texas:',
            description:'Figma ipsum component variant main layer. Figjam boolean team plugin flows device asset arrow.'
        },
        {
            id: 2,
            image:'Thumbnail1.svg',
            name:'Dr. Mary Ann Maxwell',
            heading: 'Central Texas:',
            description:'Figma ipsum component variant main layer. Figjam boolean team plugin flows device asset arrow.'
        },
        {
            id: 3,
            image:'mkt-patrick-salinas22.svg',
            name:'Dr. Mary Ann Maxwell',
            heading: 'Central Texas:',
            description:'Figma ipsum component variant main layer. Figjam boolean team plugin flows device asset arrow.'
        },
        
    ]

    const OurOffice = [
        {
          acadamicImg: "Academicsimg1.svg",
          acadamicname: "504 Services",
          acadamicdescription: "Section 504 Services are designed to provide a system of identifying eligible students with disabilities as defined under Section 504 of the Rehabilitation Act. Once identified, these students are ensured access to a Free and Appropriate Public Education (FAPE) by providing accommodations that allow equal access to the curriculum in the general education setting. While many students who receive 504 status and services are dyslexic or have attention deficit/hyperactivity disorder (ADHD), services are not limited to only these areas of disability. Any student with a disability that substantially limits one or more life activities may be considered for 504 services.",
          acadamicbutton:"504 Service",
        
        },
        {
            acadamicImg: "Academicsimg2.svg",
            acadamicname: "Advanced Academics",
            acadamicdescription: "Advanced academics are educational programs designed to move students with high ability at a pace appropriate to their rate of learning through studies that go beyond the age-level or grade-level expectations which include depth and complexity, provide academic acceleration, and address the cognitive, social, and emotional needs of the students. ",
            acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg3.svg",
            acadamicname: "AVID",
            acadamicdescription: "The Mission of AVID is to ensure that ALL students, especially those who are in the academic middle of their class will succeed in rigorous curriculum, complete a rigorous college preparatory path, enter mainstream activities of the school, increase their enrollment in four-year colleges, and become educated and responsible participants and leaders in a democratic society. AVID",
            acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg4.svg",
          acadamicname: "Creative Learning Initiative",
          acadamicdescription: "The Creative Learning Initiative is an innovative, collective impact partnership among Austin ISD, MINDPOP, the City of Austin, and over 100 Austin-area artists and arts organizations. CLI works to ensure that every student benefits from the arts and creative learning during and outside of school through Creative Teaching, arts access, and campus and community arts partnerships.",
          acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg5.svg",
            acadamicname: "Curriculum",
            acadamicdescription: "AISD guarantees a viable curriculum aligned with standards that promotes acquisition of knowledge and skills with a continual emphasis on student learning and performance. District curriculum is grounded in the implementation and integration of three primary initiatives: whole child (Social and Emotional Learning, Creative Learning Initiative, cultural inclusiveness, coordinated school health), literacy, and the transformative use of technology.CTE",
            acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg6.svg",
            acadamicname: "Dyslexia Services",
            acadamicdescription: "Students with dyslexia can be served under special education or under Section 504, depending on the student’s unique needs. For more information and resources, visit the website.",
            acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg7.svg",
          acadamicname: "Early Childhood",
          acadamicdescription: "The Early Childhood Department provides support for the implementation of a rigorous research-based early childhood curriculum as well as develops curriculum that ensures best teaching practices and developmentally prepares students for the rigors of kindergarten and beyond.Early Childhood. ",
          acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg8.svg",
            acadamicname: "Library Media Services",
            acadamicdescription: "AISD guarantees a viable curriculum aligned with standards that promotes acquisition of knowledge and skills with a continual emphasis on student learning and performance. District curriculum is grounded in the implementation and integration of three primary initiatives: whole child (Social and Emotional Learning, Creative Learning Initiative, cultural inclusiveness, coordinated school health), literacy, and the transformative use of technology CTE",
            acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg9.svg",
          acadamicname: "Multilingual Education",
          acadamicdescription: "The Austin ISD Fine Arts Department believes that a Fine Arts education is essential for the development of the whole child. The arts provide students with unique experiences that allow the",
          acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg10.svg",
            acadamicname: "School, Family & Community Education",
            acadamicdescription: "The Department of School, Family & Community Education offers a variety of support services and programs that enrich the school experience; provide and connect families with vital resources; as well as build strong community partnerships to ensure the success of all students.School, Family & Community Education",
            acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg11.svg",
          acadamicname: "SEL & Whole Child",
          acadamicdescription: "Social and Emotional Learning is a process for helping children and adults develop fundamental skills for life effectiveness. SEL teaches the skills we all need to handle ourselves, our relationships, and our work effectively and ethically. Coordinated School Health, creative learning strategies, social and emotional learning and culturally responsive strategies in all classrooms collaborate to develop and support the Whole Child.Social & Emotional Learning CTE  ",
          acadamicbutton:"Advanced Academics",
        },
        {
            acadamicImg: "Academicsimg12.svg",
            acadamicname: "Dyslexia Services",
            acadamicdescription: "Students with dyslexia can be served under special education or under Section 504, depending on the student’s unique needs. For more information and resources, visit the website. ",
            acadamicbutton:"Advanced Academics",
        }
    
      ];
  return (
  
  

  <>
   <Layout pageClass="" pageTitle="">
    <AcadamicsBanner />
   <Academic  data={acadamicData} data1={OurOffice}  visible={academicvisible} setAcademicvisible={setAcademicvisible}
        onHides={() => setAcademicvisible(false)}  />
   </Layout>
  </>
  )
}

export default Acadamics
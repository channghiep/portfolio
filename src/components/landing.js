import { Tabs, Tab, TabPanel, Typography, useMediaQuery, tableHeadClasses } from '@mui/material';
// import useMediaQuery from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { ExternalLink, GitHub, Linkedin, Instagram , Facebook} from "react-feather"
import Navigation from './navigation/navigation';
import profile from '../assets/profile.jpg'

function Landing() {

  // control tab index
  const [tabIndex, setTabIndex] = useState(0)
  const [navIsActivated, setNavActive] = useState(false);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex)
  }

  const arrayOfWork = [
    {
      project: "YouTube Search Project",
      description: "A web app created using ReactJS and styling with Tailwind. The application intergrates Youtube Search API and Embed Youtube Video enabling user to fully watch a Youtube video while being able to search and create a list for next video",
      tech:[
        "ReactJS", "Tailwind", "Youtube Search API", "AWS Amplify"
      ],
      gitLink:"https://github.com/channghiep/youtubesearch",
      externalLink:"https://master.d3sv4kcm72raqj.amplifyapp.com/"
    },
    {
      project: "Truong Thanh Restaurant Project",
      description: "A website for local Vietnamese restaurant was built with React and styled with CSS. The website is also intergrated with PerkHero to enable online ordering feature",
      tech:[
        "ReactJS", "CSS", "AWS Amplify"
      ],
      gitLink:"https://github.com/channghiep/truongthanh",
      externalLink:"https://truongthanh.ca"
    },
    {
      project: "Aria Nail Salon Project",
      description: "A website for local Vietnamese Nail Salon was built with React and styled with CSS. The website is mainly used to show customer salon's galery and to promote to customer seasonal special deal",
      tech:[
        "ReactJS", "CSS", "AWS Amplify"
      ],
      gitLink:"https://github.com/channghiep/AriaNails-website",
      externalLink:"https://master.dxisirf63jlq5.amplifyapp.com/"
    }

  ]

  const smallScreen = useMediaQuery("(min-width:768px)");
  console.log(smallScreen)

  return (
    <div>
      <div class={`bg-background1 font-sans`}>
        {/* <header class="bg-gray-200 h-16 fixed z-1000 top-0 w-full">
        </header> */}
        <header class="">
          <Navigation setActive={setNavActive} isActivated={navIsActivated}/>
        </header>

        <div class="hidden text-textcolor2 fixed bottom-0 w-[40px] left-[20px] md:block">
          <ul class="flex flex-col items-center m-0 p-0">
            <li className='my-2'>
              <a href="https://github.com/channghiep">
                <GitHub/>
              </a>
            </li>
            <li className='my-2'>
              <a href="https://www.linkedin.com/in/channghiep/">
                <Linkedin/>
              </a>
             </li>
            <li after="" class="mt-2 after:content-[attr(after)] after:w-[.5px] after:h-[90px] after:bg-white after:block after:mb-0 after:mt-3 after:mx-auto">
              <a href="https://www.facebook.com/nghiep.nguyenchan">
                <Facebook/>
              </a>
              </li>
          </ul>
        </div>
        <div class="hidden text-textcolor2 fixed bottom-0 w-[40px] right-[20px] md:block">
          <ul class="flex flex-col items-center m-0 p-0">
            <li className='my-8 rotate-90'>
              <a href="https://sciamachy.ca">
                Sciamachy.ca
              </a>
            </li>
            <li after="" class="mt-2 after:content-[attr(after)] after:w-[.5px] after:h-[90px] after:bg-white after:block after:mb-0 after:mt-3 after:mx-auto"></li>
          </ul>
        </div>

        <div className={`${navIsActivated ? "blur-sm" : ""}`}>
          <main class="w-full px-[50px]">

            <section class="flex flex-col justify-center items-start min-h-screen h-screen max-w-screen-sm md:mx-auto xl:max-w-screen-lg">
              <div>
                <h1 class="text-md font-light text-textcolor ">Hi, my name is</h1>
              </div>
              <div>
                <h2 class="text-5xl font-semibold text-textcolor2">Brian Nguyen</h2>
              </div>
              <div>
                <h3 class="text-4xl text-textcolor3">I build website for small businesses</h3>
              </div>
              <div>
                <p class="text-lg text-textcolor3 font-mono">I’m a web developer specializing in building (and occasionally designing) exceptional digital experiences. 
                  Currently, I’m focused on impproving my skill with MERN stack</p>
              </div>
            </section>

            <section id="about" class="min-h-screen md:max-w-[90%] lg:max-w-screen-md xl:max-w-screen-lg md:mx-auto">
              <h2 class="text-xl font-semibold text-textcolor2 mt-[10px] mb-[40px] flex items-center after:content-[attr(after)] after:w-2/4 after:h-[1px] after:bg-textcolor3 after:block after:ml-4"><span class="text-textcolor">01.&nbsp;</span>About Me</h2>
              <div class="text-textcolor3 md:grid md:grid-cols-3 gap-x-10 font-mono">
                <div className='col-span-2'>
                  <p class="pb-[15px]">Hello! My name is Brian Nguyen, and I am a web developer and production support specialist from Surrey, BC, Canada.</p>
                  <p class="pb-[15px]">I have a passion for creating professional and visually appealing websites for small businesses, and have had success in increasing incoming calls to my clients' businesses by over 20% through my use of ReactJS. In my work, I also enjoy collaborating with customers to create and manage their online profiles and social media accounts, and have a strong track record of maintaining high ratings on Google.</p>
                  <p class="pb-[15px]">In addition to my work as a web developer, I am also currently employed as a production support specialist at Wesgar Inc., where I analyze engineer drawings, build manufacturing procedures, and estimate production times and expenses. I have been able to increase the company's winning rate of quotations by 15% through my identification of potential feasibility and manufacturing issues, and have helped to reduce product rejection rates through the creation of accurate processes.</p>
                  <p class="pb-[15px]">Here are a few technologies I’ve been working with recently:</p>
                  
                  <ul class="grid grid-cols-2">
                    <li 
                      before="▹"
                      class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">React
                    </li>
                    <li 
                      before="▹"
                      class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">Javascript
                    </li>
                    <li 
                      before="▹"
                      class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">Node.js
                    </li>
                    <li 
                      before="▹"
                      class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">Tailwind
                    </li>
                    <li 
                      before="▹"
                      class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">MongoDb
                    </li>
                    <li 
                      before="▹"
                      class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">Express
                    </li>      
                  </ul>
                </div>

                <div class="mt-20 md:relative rounded-md shadow-neumor1 profile-background mx-auto">
                  {/* <img class="h-auto w-72 md:absolute md:object-cover md:h-auto md:w-full rounded-md m-auto shadow-neumor1" src={profile} alt=""/> */}
                  {/* <div className='h-72 w-72 absolute md:object-cover md:h-auto md:w-full rounded-md m-auto bg-black z-20'></div> */}
                </div>
              </div>
            </section>

            <section id="experience" class="min-h-screen mt-[80px] md:max-w-[90%] lg:max-w-screen-md xl:max-w-screen-lg md:mx-auto">
              <h2 class="text-xl font-semibold text-textcolor2 mt-[10px] mb-[40px] flex items-center after:content-[attr(after)] after:w-2/4 after:h-[1px] after:bg-textcolor3 after:block after:ml-4"><span class="text-textcolor">02.&nbsp;</span>Where I've worked</h2>

              <div className='md:grid md:grid-cols-4'>
                <Box>
                  <Tabs 
                    value={tabIndex}
                    orientation={`${smallScreen ? "vertical" : "horizontal"}`} 
                    variant="scrollable"
                    onChange={handleTabChange}
                    sx={{
                      '& .MuiTabs-indicator': { 
                        backgroundColor: "#FFD400",
                        [`@media (min-width: 768px)`]:{
                          left: 0,
                        }
                     },
                      '& .MuiTab-root': { 
                        color: "#8892B0",

                        borderBottom: 1,
                        borderColor: "#8892B0",
                        [`@media (min-width: 768px)`]:{
                          borderBottom: 0,
                          borderLeft:1,
                        }
                      },
                      '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected': { color: "#FFD400" },
                      '.css-lfwcke-MuiTabs-flexContainer': {
                        [`@media (min-width: 768px)`]:{
                          alignItems: 'flex-start',
                        }
                
                      }
                      
                     
                    }}  
                  >
                    <Tab label="Freelance"/>
                    <Tab label="Wesgar"/>
                    <Tab label="Langara"/>
                    <Tab label="London Drug"/>
                  </Tabs>
                </Box>

                <Box className="md:col-span-3 mt-10 md:mt-0">

                  {tabIndex === 0 && (
                    <Box>
                      <h2 className="text-xl font-normal text-textcolor2">Web Developer @Freelance</h2>
                      <h3 className="text-textcolor3">March 2020 - Present</h3>
                      <ul className="text-textcolor3 font-mono">
                        <li 
                          before="▹"
                          class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                        >
                          Build and deploy websites for small businesses using ReactJS to provide a professional appearance and enhance reach on the public domain which successfully increase incoming calls to business by over 20%.
                        </li>
                        <li 
                          before="▹"
                          class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                        >
                          Collaborate with customers to create and manage public profiles, social media accounts to improve customer support ability which bring more followers to social media accounts and maintain over 4 stars on Google rating.
                        </li>
                        <li 
                          before="▹"
                          class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                        >
                          Hold daily meetings with the designer and project manager to keep everyone up-to-date and improve coding efficiency and component quality.
                        </li>
                        <li 
                          before="▹"
                          class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                        >
                          Use version control with Git/GitHub to simultaneously fix and improve the code, improving team flow and productivity.
                        </li>      
                      </ul>
                    </Box>
                  )}
                  {tabIndex === 1 && (
                    <Box>
                      <h2 className="text-xl font-normal text-textcolor2">Product Support Specialist @Wesgar</h2>
                      <h3 className="text-textcolor3">Jan 2022 - Present</h3>
                      <ul className="text-textcolor3 font-mono">
                        <li 
                          before="▹"
                          class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                        >
                          Analyze engineer drawings to identify potential feasibility and manufacturing issues and propose feasible solutions within current capacity. This results in a 15% increase in the winning rate of quotations.
                        </li>
                        <li 
                          before="▹"
                          class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                        >
                          Build manufacturing procedures based on Wesgar's standards and in-house machine capabilities, resulting in accurate processes and a reduction in product rejection rates.
                        </li>
                        <li 
                          before="▹"
                          class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                        >
                          Estimate the time and expenses for each production stage by evaluating the nature of the material and the customer's design, allowing for competitive pricing by minimizing costs.
                        </li>      
                      </ul>
                    </Box>
                  )}
                  {tabIndex === 2 && (
                    <Box>
                    <h2 className="text-xl font-normal text-textcolor2">Teaching Assistant @Langara College</h2>
                    <h3 className="text-textcolor3">September 2022 - Present</h3>
                    <ul className="text-textcolor3 font-mono">
                      <li 
                        before="▹"
                        class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                      >
                        Evaluate students' assignments and coding exams using the professor's guidelines and provide feedback to help students perform better. This results in accurate and fair grades for students.
                      </li>
                      <li 
                        before="▹"
                        class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                      >
                        Report to the professor on students' performance, consult and give suggestions to improve the learning experience. This helps students understand the material better and improve their grades.
                      </li>     
                    </ul>
                  </Box>
                  )}
                  {tabIndex === 3 && (
                    <Box>
                    <h2 className="text-xl font-normal text-textcolor2">Technical Specialist @London Drugs</h2>
                    <h3 className="text-textcolor3">August 2021 – January 2022</h3>
                    <ul className="text-textcolor3 font-mono">
                      <li 
                        before="▹"
                        class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                      >
                        Advised customers on appropriate service and products by taking extra step digging into their problems which resulted in increasing department’s sale and reducing return rate.
                      </li>
                      <li 
                        before="▹"
                        class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1"
                      >
                        Suggested customer to consider purchasing add on product by providing feature and necessity of the product resulting in being best-seller of the month for add on product.
                      </li>     
                    </ul>
                  </Box>
                  )}                  
                </Box>
                {/* <TabPanel value={value} index={0}>
                  Item1
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item1
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item1
                </TabPanel> */}
              </div>
              
            </section>

            <section id="work" className='min-h-screen pt-[80px] md:max-w-[90%] lg:max-w-screen-md xl:max-w-screen-lg md:mx-auto'>
              <h2 class="text-xl font-semibold text-textcolor2 mt-[10px] mb-[40px] flex items-center after:content-[attr(after)] after:w-2/4 after:h-[1px] after:bg-textcolor3 after:block after:ml-4"><span class="text-textcolor">03.&nbsp;</span>Some Things I've Built</h2>

              <ul className='text-textcolor3'>
                {arrayOfWork.map((project,index) => {
                  return(
                    <li className='shadow-md bg-slate-800/30 p-5 mb-5' key={index}>
                      <div>
                        <p class="text-md font-semibold text-textcolor">Featured Project</p>
                        <h3 class="text-xl font-semibold text-textcolor2">{project.project}</h3>
                        <p className='my-6 font-mono'>
                           {project.description}
                        </p>
                      </div>
                      <ul className='flex flex-wrap my-[10px] ml-[-10px] font-semibold text-textcolor'>
                        {project.tech.map((item,index) => {
                          return(
                            <li className='mx-[10px]' key={index}>{item}</li>
                          )
                        })}
                      </ul>
                      <div className='flex  items-center mt-[10px] ml-[-10px]'>
                        <a className='flex justify-center items-center p-[10px]' href={project.gitLink}>
                          <GitHub/>
                        </a>
                        <a className='flex justify-center items-center p-[10px]' href={project.externalLink}>
                          <ExternalLink/>
                        </a>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </section>

            <section id="contact" className='pt-[80px] text-textcolor3 md:max-w-[90%] lg:max-w-screen-md xl:max-w-screen-lg md:mx-auto'>
              <h2 class="text-xl font-semibold text-textcolor mt-[10px] mb-[20px] text-center">04.&nbsp;What's Next ?</h2>
              <h1 class="text-4xl font-bold text-textcolor2 mt-[10px] mb-[40px] text-center">Get In Touch</h1>
              <p className='font-mono'>
                I'm currently looking for a web developer position to improve my skills in a more structured environment. My inbox is open for opportunities, I will get back to your email ASAP 
              </p>
            </section>

          </main>
          <footer className='text-textcolor3 mt-10 pb-10'>
            <div>
              <ul className='flex justify-center'>
                <li className='mx-5'>
                  <a>
                    <GitHub/>
                  </a>
                </li>
                <li className='mx-5'>
                  <a>
                    <Linkedin/>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Landing;

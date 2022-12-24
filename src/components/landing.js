import { Tabs, Tab, TabPanel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { ExternalLink, GitHub, Linkedin } from "react-feather"

function Landing() {

  // control tab index
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex)
  }

  const arrayOfWork = [

  ]
  return (
    <div>
      <div class="bg-background1 font-roboto">
        <header class="bg-gray-200 h-16 fixed z-1000 top-0 w-full">
          <nav>
            
          </nav>
        </header>

        {/* <div class="text-textcolor2 fixed bottom-0 w-[40px] left-[20px]">
          <ul class="flex flex-col items-center m-0 p-0">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li after="" class="mb-2 after:content-[attr(after)] after:w-[1px] after:h-[90px] after:bg-white after:block after:my-0 after:mx-auto">test</li>
          </ul>
        </div> */}

        <div>
          <main class="w-full px-[50px]">

            <section class="flex flex-col justify-center items-start min-h-screen h-screen">
              <div>
                <h1 class="text- font-normal text-textcolor ">Hi, my name is</h1>
              </div>
              <div>
                <h2 class="text-5xl font-semibold text-textcolor2">Brian Nguyen</h2>
              </div>
              <div>
                <h3 class="text-4xl text-textcolor3">I build website for small businesses</h3>
              </div>
              <div>
                <p class="text-lg text-textcolor3">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
                  Currently, I’m focused on building accessible, human-centered products a</p>
              </div>
            </section>

            <section class="min-h-screen">
              <h2 class="text-xl font-semibold text-textcolor2 mt-[10px] mb-[40px] flex items-center after:content-[attr(after)] after:w-[90px] after:h-[1px] after:bg-white after:block after:mx-auto"><span class="text-textcolor">01.&nbsp;</span>About Me</h2>
              <div class="text-textcolor3">
                <div>
                  <p class="pb-[15px]">Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                  <p class="pb-[15px]">Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                  <p class="pb-[15px]">I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                  <p class="pb-[15px]">Here are a few technologies I’ve been working with recently:</p>
                </div>
                <ul class="grid grid-cols-2">
                  <li 
                    before="▹"
                    class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">React
                  </li>
                  <li 
                    before="▹"
                    class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">React
                  </li>
                  <li 
                    before="▹"
                    class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">React
                  </li>
                  <li 
                    before="▹"
                    class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">React
                  </li>
                  <li 
                    before="▹"
                    class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">React
                  </li>
                  <li 
                    before="▹"
                    class="before:content-[attr(before)] before:text-textcolor before:mr-1 mb-1">React
                  </li>      
                </ul>

                <div class="mt-10">
                  <img class="h-72 w-72 rounded-md m-auto  " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
              </div>
            </section>

            <section class="min-h-screen h-screen mt-[80px]">
              <h2 class="text-xl font-semibold text-textcolor2 mt-[10px] mb-[40px] flex items-center after:content-[attr(after)] after:w-[90px] after:h-[1px] after:bg-textcolor3 after:block after:mx-auto"><span class="text-textcolor">02.&nbsp;</span>Where I've worked</h2>

              <div>
                <Box>
                  <Tabs 
                    value={tabIndex} 
                    onChange={handleTabChange}
                    sx={{
                      '& .MuiTabs-indicator': { backgroundColor: "#58E3C4" },
                      '& .MuiTab-root': { 
                        color: "#8892B0",
                        borderBottom: 1,
                        borderColor: "#8892B0" },
                      '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected': { color: "#58E3C4" },
                     
                    }}  
                  >
                    <Tab label="Item 1"/>
                    <Tab label="Item 2"/>
                    <Tab label="Item 3"/>
                    <Tab label="Item 4"/>
                  </Tabs>
                </Box>

                <Box>

                  {tabIndex === 0 && (
                    <Box>
                      <h2 className="text-xl font-normal text-textcolor2">Web Developer @Freelance</h2>
                      <h3 className="text-textcolor3">March 2020 - Present</h3>
                      <ul className="text-textcolor3">
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
                      <ul className="text-textcolor3">
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
                    <ul className="text-textcolor3">
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
                    <ul className="text-textcolor3">
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

            <section className='min-h-screen h-screen pt-[80px]'>
              <h2 class="text-xl font-semibold text-textcolor2 mt-[10px] mb-[40px] flex items-center after:content-[attr(after)] after:w-[90px] after:h-[.5px] after:bg-textcolor3 after:block after:mx-auto"><span class="text-textcolor">03.&nbsp;</span>Some Things I've Built</h2>

              <ul className='text-textcolor3'>
                <li className='shadow-md bg-slate-800/30 p-5'>
                  <div>
                    <p class="text-md font-semibold text-textcolor">Featured Project</p>
                    <h3 class="text-xl font-semibold text-textcolor2">YouTube Search Project</h3>
                    <p className='my-6'>A simple website created using ReactJS and styling with Tailwind. The application intergrates Youtube Search API and Embed Youtube Video enabling user to fully watch a Youtube video while being able to search and create a list for next video

                    </p>
                  </div>
                  <ul className='flex my-[10px]  ml-[-10px] font-semibold text-textcolor'>
                    <li className='mx-[10px]'>ReactJS</li>
                    <li className='mx-[10px]'>TailWind</li>
                    <li className='mx-[10px]'>YouTube Search API</li>
                    <li className='mx-[10px]'>AWS Amplify</li>
                  </ul>
                  <div className='flex  items-center mt-[10px] ml-[-10px]'>
                    <a className='flex justify-center items-center p-[10px]'>
                      <GitHub/>
                    </a>
                    <a className='flex justify-center items-center p-[10px]'>
                      <ExternalLink/>
                    </a>
                  </div>
                </li>
              </ul>
            </section>

            <section className='pt-[80px] text-textcolor3'>
              <h2 class="text-xl font-semibold text-textcolor mt-[10px] mb-[20px] text-center">04.&nbsp;What's Next ?</h2>
              <h1 class="text-4xl font-bold text-textcolor2 mt-[10px] mb-[40px] text-center">Get In Touch</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quibusdam iste voluptates obcaecati doloremque rerum modi dolorem, officiis corporis repellat quo tempora quis voluptate tenetur nam, illum dolorum veritatis ea!
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
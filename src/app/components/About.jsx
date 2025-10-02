import React from 'react'

const About = () => {
  return (
    <>
 
          {/* Main Content Area */}
        <main className="lg:ml-[33.333333%] w-full lg:w-2/3 p-6 lg:p-10 relative z-20 ">
          <section id="about" className="max-w-2xl text-gray-300 leading-relaxed space-y-6 pt-10 lg:pt-20">
            <p className="text-base lg:text-lg">
              I'm a developer passionate about crafting accessible, pixel-perfect user 
              interfaces that blend thoughtful design with robust engineering. My favorite 
              work lies at the intersection of design and development, creating experiences 
              that not only look great but are meticulously built for performance and usability.
            </p>

            <p className="text-base lg:text-lg">
              Currently, I'm a Senior Front-End Engineer at{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors">Klaviyo</span>, 
              specializing in accessibility. I contribute to the creation and maintenance of UI 
              components that power Klaviyo's frontend, ensuring our platform meets web 
              accessibility standards and best practices to deliver an inclusive user experience.
            </p>

            <p className="text-base lg:text-lg">
              In the past, I've had the opportunity to develop software across a variety of 
              settings — from{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors">advertising agencies</span>{' '}
              and{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors">large corporations</span>{' '}
              to{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors">start-ups</span>{' '}
              and{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors">small digital product studios</span>. 
              Additionally, I also released a{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors">comprehensive video course</span>{' '}
              a few years ago, guiding learners through building a web app with the Spotify API.
            </p>

            <p className="text-base lg:text-lg">
              In my spare time, I'm usually climbing, reading, hanging out with my wife and 
              two cats, or running around Hyrule searching for{' '}
              <span className="text-blue-400 hover:text-blue-300 transition-colors">Korok seeds</span>.
            </p>
          </section>
        </main>
    </>
  )
}

export default About
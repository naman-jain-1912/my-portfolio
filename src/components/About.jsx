/**
 * @copyright 2026 codewithjainsahab
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: 'SGPA',
    number: 8.68
  },
  {
    label: 'Project done',
    number: 3
  }
];

const About = () => {
  return (
    <>
      <section
        id="about"
        className="section">
        <div className="container">
          <div className="bg-zinc-800/50 p-7 rounded-3xl">
            <p className="text-zinc-300 mb-4 md:mb-8 mb:text-xl md:max-w-auto">
              Welcome! I&apos;m Naman Jain, an undergraduate pursuing B.Tech in Delhi Technological University , Delhi looking to develop some gainful wbsites and projectes. Combining my creativity and knowledge , I aspire to develop and work on highly scalable projects.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-7">
              {
                aboutItems.map(({ label, number }, key) => (
                  <div key={key}>
                    <div className="flex items-center md:mb-2">
                      <span className="text-2xl font-semibold md:text-4xl">
                        {number}
                      </span>

                      {/* <span className="text-sky-400 font-semibold md:text-3xl">+</span> */}
                    </div>
                    <p className="text-sm text-zinc-400 ">
                      {label}
                    </p>
                  </div>
                ))
              }
              <img
                src={`${import.meta.env.BASE_URL}images/logo.svg`}
                alt="Logo"
                width={30}
                height={30}
                className="ml-auto md:w[40px] md:h-[40px]" />
            </div>
          </div>
        </div>
      </section></>
  )
}

export default About
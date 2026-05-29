/**
 * @copyright 2026 codewithjainsahab
 * @license Apache-2.0
 */

/**
 * Components
 */
import Skillcard from "./Skillcard";

const skillItem = [
  {
    imgSrc: '/images/c.png',
    label: 'C',
    desc: 'Coding Language'
  },
  {
    imgSrc: '/images/c++.png',
    label: 'C++',
    desc: 'Coding Language'
  },
  {
    imgSrc: '/images/python.png',
    label: 'Python',
    desc: 'Coding Language'
  },
  {
    imgSrc: '/images/mysql.png',
    label: 'My SQL',
    desc: 'Database Query Language'
  },
  {
    imgSrc: '/images/html.png',
    label: 'HTML',
    desc: 'WEB Development Language'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/canva.png',
    label: 'Canva',
    desc: 'Design Tool'
  },
  {
    imgSrc: '/images/aws.png',
    label: 'AWS',
    desc: 'Cloud Computing'
  },
];

const Skill = () => {
  return (
    <>
      <section className="section">
        <div className="container">

          <h2 className="headline-2 reveal-up">
            Languages and Tools I know
          </h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-auto">
            Discover the langiuages and tools I practice and use to create projects
          </p>

          <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {skillItem.map(({ imgSrc, label, desc }, key) =>
            (
              <Skillcard
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            )
            )
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
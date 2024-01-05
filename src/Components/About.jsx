import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-40">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I'm a Front End developer offering 6+ years experience in web
          development and design. I have a strong command over both front-end
          and back-end technologies. I build complete and scalable applications
          on AWS Cloud Platform. On the front-end side, I specialized in HTML,
          CSS, and JavaScript frameworks such as React. I'm passionate about
          creating intuitive user interfaces that provide an exceptional
          customer's experience. I pay great attention to web security, ensuring
          that the websites or applications I develop are responsive and
          accessible across different devices and browsers.
        </p>

        <br />

        <p className="text-xl mt-10">
          Moving to the back end, I'm proficient in server-side languages
          leveraging Python, Node.js, and JavaScript. I have extensive
          experience working with databases such as PostgreSQL and MongoDB. I
          design efficient database structures and write optimized queries. I
          have experience with RESTful APIs and know how to enable secure
          communication between the front end and back end. Additionally, I have
          expertise in version control systems leveraging Git, and I'm
          comfortable working in collaborative environments using Agile
          methodologies. I enjoy staying up to date with the latest trends and
          technologies in the web development world, as it allows me to
          continually improve my skills and deliver cutting-edge solutions to
          customers.
        </p>

        <br />

        <p className="text-xl mt-10">
          I thrive in dynamic environments where I can tackle challenges,
          collaborate with cross-functional teams, and deliver high-quality
          solutions that meet both user requirements and business objectives.
          I'm excited to be part of a team where I can contribute my full stack
          development skills and help create innovative and impactful
          applications.
        </p>
      </div>
      <div className=''>

      </div>
    </div>
  );
};

export default About;

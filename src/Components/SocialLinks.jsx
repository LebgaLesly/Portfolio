/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-useless-concat */
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
            <>
              LinkedIn <FaLinkedin size={30} className='text-blue-600'/>
            </>
            ),
            href: 'https://linkedin.comwww.linkedin.com/in/lebga-lesly-tita-660557297',
            style1: 'rounded-tr-md',
            style2: 'text-blue-600'
        },
        {
            id: 2,
            child: (
            <>
              GitHub <FaGithub size={30}  className='text-black'/>
            </>
            ),
            href: 'https://github.com/LebgaLesly',
            style5: 'text-black'
        },
        {
            id: 3,
            child: (
            <>
              Mail <HiOutlineMail size={30} className='text-red-300'/>
            </>
            ),
            href: 'mailto:leslysoftwarespecialist@gmail.com',
            style3: 'text-red-400'
        },
        {
            id: 4,
            child: (
            <>
              Resume <BsFillPersonLinesFill size={30} className='text-orange-500'/>
            </>
            ),
            href: '/Resume.pdf ',
            style1: 'rounded-br-md',
            download: true,
            style4: 'text-orange-400'
        }
    ]


  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>

        {links.map(({id, child, href, style1, download, style2, style3, style4, style5}) => {
          return(
            <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " + style1}>
          <a 
          href={href}
          className={'flex justify-between items-center w-full ' + " " + style2 + " " + style3 + " " + style4 + " " + style5}
          download={download}
          target='_blank'
          >
            {child}
          </a>
        </li>
          )
        })}
        
      </ul>
    </div>
  );
};

export default SocialLinks;

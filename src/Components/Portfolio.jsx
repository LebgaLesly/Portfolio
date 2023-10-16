import LesChat from '../Assets/Projects/LesChat.png';
import QuickAndEasy from '../Assets/Projects/QuickAndEasy.png';
import QuickMatch from '../Assets/Projects/QuickMatch.png';
import TechNet from '../Assets/Projects/TechNet.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TechNet,
    },

    {
      id: 2,
      src: QuickAndEasy,
      hrefdemo: 'https://lebgalesly.github.io/E-commerce-Quick-and-Easy-/',
      hrefcode: 'https://github.com/LebgaLesly/E-commerce-Quick-and-Easy-'
    },

    {
      id: 3,
      src: LesChat,
    },

    {
      id: 4,
      src: QuickMatch,
      hrefdemo: 'https://lebgalesly.github.io/Quick_Match/',
      hrefcode: 'https://github.com/LebgaLesly/Quick_Match'
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-orange-400">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,hrefdemo, hrefcode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={hrefdemo} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={hrefcode} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

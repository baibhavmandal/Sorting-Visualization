import { Link } from 'react-router-dom';
import { LinkIcon } from '@heroicons/react/24/solid';

// Commponets
import Header from '../components/Header.jsx';

const sortingList = [
  {
    label: 'Insertion Sort Visualization',
    link: '/insertion-sort',
  },
  {
    label: 'Quick Sort Visualization',
    link: '/quick-sort',
  },
  {
    label: 'Selection Sort Visualization',
    link: '/selection-sort',
  },
];

const Home = () => {
  return (
    <>
      <Header title="Data Structure Visualization" />
      <div>
        <div>
          <h2>Sorting Algorithms</h2>
          <ul>
            {sortingList.map((data, index) => {
              const { label, link } = data;
              return (
                <li className="mx-8" key={index}>
                  <Link className="flex items-center" to={link}>
                    <span className="m-2">{label}</span>{' '}
                    <LinkIcon className="size-3 text-federal-blue" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;

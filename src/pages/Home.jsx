import JobList from '../components/jobList';
import Navbar from '../components/NavBar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
        <JobList />
      </div>
    </>
  );
};

export default Home;

import { useContext } from 'react';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';
import GithubContext from '../context/github/GithubContex';

function Home() {
  return <div>
      <UserSearch />
      <UserResults />
  </div>;
}

export default Home;

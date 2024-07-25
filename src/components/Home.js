import Form from './Form';
import Places from './places/Places';
import Shopping from './shopping/Shopping';
import Counter from './Counter';
import Authentication from './user/Authentication';
import Profile from './user/Profile';
import { useSelector } from 'react-redux';

function Home() {
  const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);

  return (
    <div className="home">
      <div className="header">Practice</div>
      <Form />
      <Shopping />
      <Places />
      <Counter />
      {!isAuthenticated ? <Authentication /> : <Profile />}
    </div>
  );
}

export default Home;

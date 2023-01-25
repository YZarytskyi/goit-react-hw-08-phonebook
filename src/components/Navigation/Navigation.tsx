import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/hooks';
import { UserMenu } from '../UserMenu/UserMenu';
import { Header, Nav } from './Navigation.styled';

const Navigation = () => {
  const user = useAppSelector(state => state.auth.user);

  return (
    <Header>
      <p>Phonebook</p>
      {user ? (
        <UserMenu />
      ) : (
        <Nav>
          <Link to="/register">Sign up</Link>
          <Link to="/login">Log in</Link>
        </Nav>
      )}
    </Header>
  );
};

export default Navigation;

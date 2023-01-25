import { Button } from '@chakra-ui/react';
import { logOut } from '../../redux/auth/authThunks';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { Container, Email } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  const onClickLogout: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <Container>
      <Email>{user?.email}</Email>
      <Button onClick={onClickLogout} colorScheme="teal" variant="outline" size='sm'>
        Logout
      </Button>
    </Container>
  );
};

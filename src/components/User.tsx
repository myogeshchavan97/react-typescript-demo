import { FC } from 'react';
import { Name } from '../App.types';

interface UserProps {
  name: Name;
  email: string;
}

const User: FC<UserProps> = ({ name, email }) => {
  return (
    <li>
      <div>
        Name: {name.first} {name.last}
      </div>
      <div>Email: {email}</div>
      <hr />
    </li>
  );
};

export default User;

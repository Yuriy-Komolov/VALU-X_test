import { FC } from "react";
import { User } from "../../types/User"

type Props = {
  users: User[];
  toShow: number;
  handleSelectUser: (name: string) => void;
}

export const UsersList: FC<Props> = ({ users, toShow, handleSelectUser }) => {
  return (
    <ul className="user-list">
    {users.slice(0, toShow).map(user => (
      <li className="user-list__item" key={user.nickname}>
        <div className="user-list__info">
          <div className="user-list__avatar">
            <img
              className="user-list__image"
              src={require(`../../assets/foto/${user.photo}`)}
              alt="avatar"
            />
          </div>
          <div className="user_list__contacts">
          <p className="user-list__name">{user.name}</p>
          <p className="user-list__email">{user.email}</p>
          </div>
        </div>
        <button 
          className='btn user-list__btn'
          onClick={() => handleSelectUser(user.name)}>View</button>
      </li>
    ))}
  </ul>
  )
};

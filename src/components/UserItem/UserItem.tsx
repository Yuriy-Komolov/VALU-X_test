import { FC } from 'react';
import { User } from '../../types/User';
import './styles.css'

type Props = {
  user: User | null;
  handleCloseModal: () => void;
}
export const UserItem: FC<Props> = ({ user, handleCloseModal }) => {
  return (
    <div className='user-item__modal'>
      <div className="user-item__box">
        <button className="user-item__close" onClick={handleCloseModal}>close</button>
        <div className="user-list__avatar">
          <img
            className="user-list__image"
            src={require(`../../assets/foto/${user?.photo}`)}
            alt="avatar"
          />
        </div>
        <h3 className="user-item__name">{user?.name}</h3>
        <p className="user-item__pos">{user?.position}</p>
        <div className="user-item__contacts">
          <p className="user-item__phone">Phone {user?.phone}</p>
          <p className="user-item__email">Phone {user?.email}</p>
        </div>
      </div>
    </div>
  )
}

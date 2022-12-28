import { useEffect, useState } from 'react';
import './App.css';

import { User } from './types/User';
import store from './Store';
import { UsersList } from './components/UserList/UsersList';
import { UserItem } from './components/UserItem/UserItem';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [toShow, setToShow] = useState(3);
  const [currentUser, setCurrentUser] = useState('');

  const handleSelectUser = (name: string) => {
    setCurrentUser(name);
  }

  const handleCloseModal = () => {
    setCurrentUser('');
  }

  useEffect(() => {
    setUsers(store.getState().persistedReduser.users);
  }, [])
  
  console.log(users.slice(-2));
  
  return (
    <div className="App">
      <div className="app__wrapper">
        <UsersList
          users={users}
          toShow={toShow}
          handleSelectUser={handleSelectUser}
        />
        <button className="btn" onClick={()=> setToShow(users.length)}>View all</button>
      </div>

      {currentUser && 
        <UserItem
          user={users.find(user => user.name === currentUser) || null}
          handleCloseModal={handleCloseModal}
        />}
    </div>
  );
}

export default App;

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';

import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />

      <Statistics title="Stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};

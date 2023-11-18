import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
// import { details } from '../@types/types';

interface Props {
  children: React.ReactNode;
}
export const ReduxProvider: React.FC<Props> = ({ children }) => {
  // const queryes = useLocation().search.match(/(?<=\w\=)\w*/g);
  // const CountItems = queryes ? Number(queryes[1]) : 6;
  // const search = useRef<string>(
  //   useParams().query || localStorage.getItem('search') || ''
  // );
  // const countItems = useRef<number>(CountItems);
  // const books = useRef<book[]>([]);
  // const details = useRef<details>(null);

  return <Provider store={store}>{children}</Provider>;
};

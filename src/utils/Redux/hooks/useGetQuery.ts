import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useGetQuery = () => {
  return useSelector((state: RootState) => state.query);
};

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useGetData = () => {
  return useSelector((state: RootState) => state.data);
};

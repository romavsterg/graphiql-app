import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useGetResult = () => {
  return useSelector((state: RootState) => state.result);
};

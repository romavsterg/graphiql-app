import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useGetErrors = () => {
  return useSelector((state: RootState) => state.errors);
};

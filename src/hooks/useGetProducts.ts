import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useGetProducts = () => {
  return useSelector((state: RootState) => state.products);
};

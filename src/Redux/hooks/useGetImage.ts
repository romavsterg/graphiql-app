import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useGetImage = () => {
  return useSelector((state: RootState) => state.image);
};

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useGetParams = () => {
  return useSelector((state: RootState) => state.params);
};

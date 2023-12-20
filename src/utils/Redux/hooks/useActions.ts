import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { actions as errorsActions } from '../store/errors.slice';
import { actions as resultActions } from '../store/result.slice';

const rootActions = {
  ...errorsActions,
  ...resultActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

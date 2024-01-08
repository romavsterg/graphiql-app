import { Context } from '../../Context/Context';
import { useActions } from '../../../utils/Redux/hooks/useActions';
import React, { useContext } from 'react';
import { mainDictionary } from '../../../dictionaries/mainDictionary';

export default function ErrorPopup(Props: { error: string }) {
  const context = useContext(Context);
  const { SetError } = useActions();
  const handleClick = () => {
    SetError({ isError: false, message: '' });
  };
  return (
    <div className="popup error">
      <div className="message">
        <p className="error-message">
          {
            mainDictionary[context?.language as keyof typeof mainDictionary]
              .error
          }
          {Props.error}
        </p>
      </div>
      <div className="action">
        <button className="close-button" onClick={handleClick}>
          Ok
        </button>
      </div>
    </div>
  );
}

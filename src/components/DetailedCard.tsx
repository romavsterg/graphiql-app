import { product } from '../@types/types';
import { useGetDetailsQuery } from '../Redux/api/api';
import detailsStyles from '../styles/DetailedCard.module.css';
import resultlStyles from '../styles/Result.module.css';

type Props = {
  id?: string;
  handleClick: () => void;
};

export default function DetailedCard(Props: Props) {
  const response = useGetDetailsQuery({ id: String(Props.id) });

  const res: {
    isLoading: boolean;
    data?: product | null | undefined;
  } = {
    isLoading: response.isLoading,
    data: response.data,
  };

  return (
    <div className={detailsStyles.details} data-testid="details-card">
      <button
        className={detailsStyles['close-details']}
        onClick={Props.handleClick}
      >
        Close details
      </button>
      {res.isLoading ? (
        <span className={resultlStyles.loader}></span>
      ) : (
        <>
          {res.data ? (
            <>
              <h4>Description: {res.data.description}</h4>
              <h5>Rating: {res.data.rating}</h5>
              <h5>Price: {res.data.price}$</h5>
            </>
          ) : (
            <h3>No details found.</h3>
          )}
        </>
      )}
    </div>
  );
}

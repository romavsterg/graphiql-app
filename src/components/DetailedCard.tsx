import { details } from '../@types/types';

type Props = {
  details: details;
  search: string;
  page: number;
  count: number;
  handleClick: () => void;
  areDetailsLoading: boolean;
};

export default function DetailedCard(Props: Props) {
  return (
    <div className="details">
      <button className="close-details" onClick={Props.handleClick}>
        Close details
      </button>
      {Props.areDetailsLoading ? (
        <span className="loader"></span>
      ) : (
        <>
          <h4>Contributor: {Props.details?.contributor}</h4>
          <h5>Language: {Props.details?.language}</h5>
          <h5>Place: {Props.details?.place}</h5>
        </>
      )}
    </div>
  );
}

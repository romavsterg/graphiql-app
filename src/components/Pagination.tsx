import '../styles/Pagination.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetParams } from '../Redux/hooks/useGetParams';
import { useActions } from '../Redux/hooks/useActions';

const Pagination = () => {
  const navigate = useNavigate();

  const { search, countItems, details, page } = useGetParams();
  const { SetPage } = useActions();

  const queryes = useLocation().search.match(/(?<=\w\=)\w*/g);
  const Page = queryes ? Number(queryes[0]) : 1;

  const prevPage = () => {
    SetPage(Page - 1);
    navigate(
      `/Components/search/${search}?page=${Page - 1}&count=${countItems}${
        details ? `&details=${details}` : ``
      }`
    );
  };

  const nextPage = () => {
    SetPage(Page + 1);
    navigate(
      `/Components/search/${search}?page=${Page + 1}&count=${countItems}${
        details ? `&details=${details}` : ``
      }`
    );
  };

  return (
    <div className="pagination">
      <button
        data-testid="prev-arrow"
        disabled={page <= 1}
        className="pagination-arrow"
        onClick={prevPage}
      >
        &#60;
      </button>
      <h2>{page}</h2>
      <button
        data-testid="next-arrow"
        className="pagination-arrow"
        onClick={nextPage}
      >
        &#62;
      </button>
    </div>
  );
};

export default Pagination;

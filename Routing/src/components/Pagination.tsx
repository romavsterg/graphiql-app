import React from 'react';
import '../styles/Pagination.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Pagination = () => {
  const page = Number(useLocation().search.replace(/\?page=/, ''));
  const params = useParams();
  const navigate = useNavigate();

  const prevPage = () => {
    navigate(`/search/${params?.query || '*'}?page=${page - 1}`);
  };

  const nextPage = () => {
    navigate(`/search/${params?.query || '*'}?page=${page + 1}`);
  };

  return (
    <div className="pagination">
      <button
        disabled={page <= 1}
        className="pagination-arrow"
        onClick={prevPage}
      >
        &#60;
      </button>
      <h2>{page}</h2>
      <button className="pagination-arrow" onClick={nextPage}>
        &#62;
      </button>
    </div>
  );
};

export default Pagination;

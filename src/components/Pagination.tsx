import { useGetParams } from '../Redux/hooks/useGetParams';
import { useActions } from '../Redux/hooks/useActions';
import { useRouter } from 'next/router';
import styles from '../styles/Pagination.module.css';
import { useEffect } from 'react';

const Pagination = () => {
  const router = useRouter();

  const { search, countItems, details, page } = useGetParams();
  const { SetPage } = useActions();

  useEffect(() => {
    if (router.isReady && typeof router.query.page === 'string') {
      SetPage(Number(router.query.page));
    }
  }, [SetPage, router]);

  const prevPage = () => {
    SetPage(page - 1);
    router.push(
      `/Components/search/${search}?page=${page - 1}&count=${countItems}${
        details ? `&details=${details}` : ``
      }`,
      undefined,
      { shallow: true }
    );
  };

  const nextPage = () => {
    SetPage(page + 1);
    router.push(
      `/Components/search/${search}?page=${page + 1}&count=${countItems}${
        details ? `&details=${details}` : ``
      }`,
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className={styles.pagination}>
      <button
        data-testid="prev-arrow"
        disabled={page <= 1}
        className={styles['pagination-arrow']}
        onClick={prevPage}
      >
        &#60;
      </button>
      <h2>{page}</h2>
      <button
        data-testid="next-arrow"
        className={styles['pagination-arrow']}
        onClick={nextPage}
      >
        &#62;
      </button>
    </div>
  );
};

export default Pagination;

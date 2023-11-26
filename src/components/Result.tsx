import styles from '../styles/Result.module.css';
import DetailedCard from './DetailedCard';
import { useGetParams } from '../Redux/hooks/useGetParams';
import { useActions } from '../Redux/hooks/useActions';
import {
  getProducts,
  getRunningQueriesThunk,
  useGetProductsQuery,
} from '../Redux/api/api';
import ProductCard from './ProductCard';
import { product } from '../@types/types';
import { useRouter } from 'next/router';
import { wrapper } from '../Redux/store/store';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const search = context.params?.search;
    const count = Number(context.params?.count);
    const page = Number(context.params?.page);
    if (
      typeof search === 'string' &&
      typeof count === 'number' &&
      typeof page === 'number'
    ) {
      store.dispatch(
        getProducts.initiate({ name: search, count: count, page: page })
      );
    }
    await Promise.all(store.dispatch(getRunningQueriesThunk()));
    return { props: { context } };
  }
);

const Result = () => {
  const router = useRouter();
  const { SetDetails } = useActions();
  const { search, countItems, details, page } = useGetParams();
  const response = useGetProductsQuery({
    name: search,
    count: countItems,
    page: page,
  });

  const res: {
    isLoading: boolean;
    data?: { products: product[] } | null | undefined;
  } = {
    isLoading: response.isLoading,
    data: response.data,
  };
  const handleClick = () => {
    console.log(details);
    if (details) {
      SetDetails('');
      router.push(
        `/Components/search/${search.replace(
          '/',
          '%2F'
        )}?page=${page}&count=${countItems}`
      );
    }
  };

  return (
    <div className={styles.container}>
      {res.isLoading ? (
        <span className={styles.loader}>loading...</span>
      ) : (
        <>
          {res.data && res.data.products[0] ? (
            <ul className={styles['product-cards']} onClick={handleClick}>
              {res.data.products.map((product: product) => (
                <ProductCard
                  key={product.id}
                  product={{
                    id: product.id,
                    title: product.title,
                    images: product.images,
                    brand: product.brand,
                  }}
                  count={countItems || 6}
                  page={page}
                />
              ))}
            </ul>
          ) : (
            <h4>No products found</h4>
          )}
          {details && res.data && (
            <DetailedCard
              id={
                res.data.products.filter(
                  (product: product) => product.id === details
                )[0].id
              }
              handleClick={handleClick}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Result;

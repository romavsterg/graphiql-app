import '../styles/Result.css';
import { useNavigate } from 'react-router-dom';
import DetailedCard from './DetailedCard';
import { useGetParams } from '../hooks/useGetParams';
import { useActions } from '../hooks/useActions';
import { useGetProductsQuery } from '../api/api';
import ProductCard from './ProductCard';
import { product } from '../@types/types';

const Result = () => {
  const navigate = useNavigate();

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
    if (details) {
      SetDetails('');
      navigate(
        `/Components/search/${
          search ? search.replace('/', '%2F') : '*'
        }?page=${page}&count=${countItems}`
      );
    }
  };

  return (
    <div className="container">
      {res.isLoading ? (
        <span className="loader">loading...</span>
      ) : (
        <>
          {res.data && res.data.products ? (
            <ul className="product-cards" onClick={handleClick}>
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

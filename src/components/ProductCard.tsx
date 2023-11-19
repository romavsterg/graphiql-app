import React from 'react';
import { Link } from 'react-router-dom';
import { product } from '../@types/types';
import { useActions } from '../Redux/hooks/useActions';

type Props = { product: product; page: number; count: number };

export default function ProductCard(Props: Props) {
  const { SetDetails } = useActions();
  return (
    <>
      {Props.product && Props.product.title && Props.product.images && (
        <li className="product-card" data-testid="product-card">
          <Link
            to={`/Components/search/${Props.product.title.replace(
              '/',
              '%2F'
            )}?page=${Props.page}&count=${Props.count}&details=${
              Props.product.id
            }`}
            className="link"
            onClick={() => SetDetails(Props.product.id)}
          >
            <img src={Props.product.images[0]} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{Props.product.title}</h3>
              <p className="product-brand">{Props.product.brand}</p>
            </div>
          </Link>
        </li>
      )}
    </>
  );
}

import React from 'react';
import { product } from '../@types/types';
import { useActions } from '../Redux/hooks/useActions';
import styles from '../styles/ProductCard.module.css';
import { useGetParams } from '@/Redux/hooks/useGetParams';
import Link from 'next/link';

type Props = { product: product; page: number; count: number };

export default function ProductCard(Props: Props) {
  const { search, page, countItems } = useGetParams();
  const { SetDetails } = useActions();
  const handleClick = () => {
    SetDetails(Props.product.id);
  };
  return (
    <>
      {Props.product && Props.product.title && Props.product.images && (
        <li
          onClick={handleClick}
          className={styles['product-card']}
          data-testid="product-card"
        >
          <Link
            href={{
              pathname: '/Components/search/[search]',
              query: {
                search: search.replace('', '*'),
                page,
                count: countItems,
                details: Props.product.id,
              },
            }}
            className={styles.link}
          >
            <img
              src={Props.product.images[0]}
              className={styles['product-image']}
            />
            <div className={styles['product-info']}>
              <h3 className={styles['product-title']}>{Props.product.title}</h3>
              <p className={styles['product-brand']}>{Props.product.brand}</p>
            </div>
          </Link>
        </li>
      )}
    </>
  );
}

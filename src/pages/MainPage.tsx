import { useGetData } from '../Redux/hooks/useGetData';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const data = useGetData();
  console.log(data);
  return (
    <>
      <nav>
        <Link to="uncontrolled-form">Uncontrolled form</Link>
        <Link to="React-hook-form">React Hook Form</Link>
      </nav>
      {data.image && (
        <div>
          <p>{data.image.name}</p>
          <img src={data.image.path} />
        </div>
      )}
    </>
  );
}

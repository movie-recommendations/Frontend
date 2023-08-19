import './MiniLoader.css';
import { FC } from 'react';

export const MiniLoader: FC = () => {
  return (
    <div className="loader">

      <div className="loader__container">
        <div className="loader__img1" />
      </div>
      <div className="loader__img_plus" />
    </div>
  );
};

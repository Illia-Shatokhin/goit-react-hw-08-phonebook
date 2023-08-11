import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.modalBody}>
      <Oval
        height={220}
        width={220}
        color="#9c27b0"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#9c27b0"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

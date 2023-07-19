import React, { useEffect } from 'react';
import styles from './CollectionAds.module.scss';
import AdBox from '../AdBox/AdBox';
import { fetchAds } from '../../../redux/adsRedux';
import { useSelector, useDispatch } from 'react-redux';

function CollectionAds() {
  const ads = useSelector(state => state.ads);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);


  return (
    <div className={styles.collectWrapper}>
      {ads.map((ad) => (
        <AdBox {...ad}/>  
      ))}
    </div>
  )
};

export default CollectionAds;
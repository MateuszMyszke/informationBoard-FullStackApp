import React from 'react';
import SearchForm from '../../features/SearchForm/SearchForm';
import { getUser } from '../../../redux/usersRedux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const loggedInUser = useSelector(getUser);

  return(
    <>
      <SearchForm />
      
      {loggedInUser&&<Link to="/ads/add">Add advertising</Link>}
     
       
    </>     
  );
};

export default Home;
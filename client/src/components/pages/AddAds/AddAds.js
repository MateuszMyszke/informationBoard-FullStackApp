import styles from './AddAds.module.scss';
import TextInput from '../../features/TextInput/TextInput';
import { useState } from 'react';
import Button from '../../features/Button/Button';
import { API_URL } from '../../../confing';

const AddAds = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [pubDate, setPubDate] = useState('')
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(null);

  const currentUser = localStorage.getItem('loggedInUser');
  console.log(currentUser);

  const handleSubmit = e => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('price', price);
    fd.append('location', location);
    fd.append('image', image);
    fd.append('user', currentUser);

    const option = {
      method: 'POST',
      body: fd,
      credentials: 'include',
    };

    fetch(`${API_URL}/ads`, option)
    .then(res => {
      if(res.status === 201){
        setStatus('success');
      } else if(res.status === 400){
        setStatus('clientError');
      } else if(res.status === 409){
        setStatus('loginError');
      } else{
        setStatus('serverError');
      }
    })
    .catch(err => {
      setStatus('serverError');
    });
  }



  return(
    
   <form className={styles.adsForm} onSubmit={handleSubmit}>

    <div className={styles.dform}>
      <label>Title: </label>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title" type="text"></TextInput>
    </div>  

    <div className={styles.dform}>
      <label>Description: </label>
      <textarea value={description} onChange={e => setDescription(e.target.value)} rows="5" cols="30"></textarea>
    </div>

    <div className={styles.dform}>
      <label>Price: </label>
      <TextInput value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter price" type="number"></TextInput>
    </div> 

    <div className={styles.dform}>
      <label>Date: </label>
      <TextInput value={pubDate} onChange={e => setPubDate(e.target.value)} placeholder="Enter date" type="date"></TextInput>
    </div> 

    <div className={styles.dform}>
      <label>Locaction: </label>
      <TextInput value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter location" type="text"></TextInput>
    </div>
 
    <div>
        <label>Image: </label>
        <TextInput type="file" onChange={e => setImage(e.target.files[0])}></TextInput>
    </div>
    <Button type="submit" value="Submit">Submit</Button>
  </form> 

  )
};

export default AddAds;
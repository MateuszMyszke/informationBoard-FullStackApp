import TextInput from '../TextInput/TextInput';
import styles from './RegisterForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { API_URL } from '../../../confing';

const RegisterForm = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [telephon, setTelephon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(login, password , telephon, avatar);

    const fd = new FormData();
    fd.append('login', login);
    fd.append('password', password);
    fd.append('avatar', avatar);
    fd.append('telephon', telephon);

    const option = {
      method: 'POST',
      body: fd,
    };

    fetch(`${API_URL}auth/register`, option);
  }

  return(
    <form className={styles.register} onSubmit={handleSubmit}>
      <div className={styles.dform}>
        <label>Login: </label>
        <TextInput value={login} onChange={e => setLogin(e.target.value)} placeholder="Enter login" type="text"></TextInput>
      </div>
      <div className={styles.dform}>
        <label>Password: </label>
        <TextInput value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" type="password"></TextInput>
      </div>
      <div>
        <label>Avatar: </label>
        <TextInput type="file" onChange={e => setAvatar(e.target.files[0])}></TextInput>
      </div>
      <div>
        <label>Telephon: </label>
        <TextInput value={telephon} onChange={e => setTelephon(e.target.value)} placeholder="Enter phone number" type="tel"></TextInput>
      </div>
      <Button type="submit" value="Submit">Submit</Button>
    </form>
  )
};

export default RegisterForm;
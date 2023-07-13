
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const LoginForm = () => {
  return(
    <form>
      <div>
        <label>Login:</label>
        <TextInput></TextInput>
      </div>
      <div>
        <label>Password:</label>
        <TextInput></TextInput>
      </div>
      <Button>Log in</Button>
    </form>
  )
}

export default LoginForm;
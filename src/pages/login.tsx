import { LoginForm } from '@/components/auth/LoginForm';
import styles from 'src/styles/auth/Auth.module.css';
import { LoginFormInputs } from 'src/types/form';

const Login: React.FC = () => {
  const submitHandler = (data: LoginFormInputs) => {
    console.log(data);
  };
  return (
    <div className={styles.container}>
      <LoginForm onSubmit={submitHandler} />
    </div>
  );
};

export default Login;

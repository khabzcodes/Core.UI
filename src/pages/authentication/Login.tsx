import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './login.scss';
import { Dispatch, RootState } from '../../redux/store';
import TextInput from '../../components/shared/TextInput';
import Button from '../../components/shared/Button';
import LoginRequest from '../../interfaces/authentication/request/LoginRequest';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch<Dispatch>();

  const { success, isAuthenticated, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const handleSubmit = async () => {
    const loginData: LoginRequest = {
      email,
      password,
    };
    await dispatch.auth.loginUserAsync(loginData);
  };

  useMemo(() => {
    if (isAuthenticated && success) {
      window.location.href = '/';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="form__container">
      <form>
        <div className="mb-3">
          {error ? <span style={{ color: 'red' }}>{error}</span> : <span />}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <TextInput
              type="email"
              value={email}
              name="emailInput"
              onChange={(val) => setEmail(val.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <TextInput
              type="password"
              value={password}
              name="passwordInput"
              onChange={(val) => setPassword(val.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button
              type="button"
              text="Login"
              textColor="#FFFFFF"
              backgroundColor="#000000"
              height={50}
              isLoading={isLoading}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

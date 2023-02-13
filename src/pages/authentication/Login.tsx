import { useState } from 'react';
import './login.scss';
import TextInput from '../../components/shared/TextInput';
import Button from '../../components/shared/Button';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    console.log(email, password);
  };
  return (
    <div className="form__container">
      <form>
        <div className="mb-3">
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
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

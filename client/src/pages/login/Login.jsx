import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://fontmeme.com/permalink/220311/98498e42918e9c088acd21ba9c527fbf.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Connexion</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}

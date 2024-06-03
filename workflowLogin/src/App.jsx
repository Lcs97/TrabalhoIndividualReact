import React, { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import arrow from './assets/arrow.svg';
import './global.css';

export function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [loggedIn, setLogged] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'lcs97@gmail.com' && password === '12345') {
      setLogged(true);
      alert('Você está logado!');
    } else {
      setLogged(false);
      alert('Email ou senha inválidos!');
    }
    setEmail('');
    setPassword('');
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      console.log(loggedIn ? 'Usuário logado com sucesso.' : 'Falha no login do usuário.');
      setSubmitted(false);
    }
  }, [submitted, loggedIn]);

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Workflow" />
        <span>Merci d'entrer vos informations de conexion</span>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <a href="">Mot de passe oublié</a>

        <button className="button" type="submit">
          Se connecter <img src={arrow} alt="arrow" />
        </button>

        <div className="footer">
          <p>Vous n'avez pas de compte ? </p>
          <a href="#">Créer um compte</a>
        </div>
      </form>
    </div>
  );
}

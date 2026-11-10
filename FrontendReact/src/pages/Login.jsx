import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Boton from '../components/Boton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faApple } from '@fortawesome/free-brands-svg-icons'
import Google from '../assets/google.svg'


function Login() {
  const navigate = useNavigate()

  // Sustituye por tu autenticación real cuando la tengas
  const entrar = (e) => {
    e.preventDefault()
    navigate('/menu')
  }

  return (
    <main className="login-main">
      <h1>¡Bienvenido!</h1>
      <div className="login-container">
        <form className="login-form" onSubmit={entrar}>
          <div className="input-container">
            <label className="input-label">
              Email
              <input type="email" placeholder="Ej: user@dominio.com" autoComplete="email" required />
            </label>

            <label className="input-label">
              Contraseña
              <input type="password" placeholder="Contraseña" autoComplete="current-password" required />
            </label>

            <label className="checkbox-label">
              <input type="checkbox" />
              Recordarme
            </label>
          </div>

          <Boton className="login-button" type="submit">Entrar</Boton>
        </form>

        <hr /> {/* Separador de inicio de sesión social */}

        <div className="social-login">
          <button type="button" className="social-button" id="google-login" onClick={entrar}>
            Continuar con Google
            <i className="social-icon">
              <img src={Google} alt="Google" />
            </i>
          </button>
          <button type="button" className="social-button" id="apple-login" onClick={entrar}>
            Continuar con Apple
            <FontAwesomeIcon icon={faApple} className="social-icon" />
          </button>
        </div>

        <p className="login-signup">
          ¿No tienes cuenta? <Link to="/signup">Regístrate</Link>
        </p>
      </div>
    </main>
  )
}

export default Login
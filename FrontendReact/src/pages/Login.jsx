import './Login.css'
import Boton from '../components/Boton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons'


function Login() {
  return (
    <main className="login-main">
      <h1>¡Bienvenido!</h1>
      <div className="login-container">
        <div className="login-form">
          <div className="input-container">
            <label className="input-label">
              Email
              <input type="email" placeholder="Ej: user@dominio.com" />
            </label>

            <label className="input-label">
              Contraseña
              <input type="password" placeholder="Contraseña" />   
            </label>

            <label className="checkbox-label">
              <input type="checkbox" />
              Recordarme
            </label>
          </div>

          <Boton className="login-button">Entrar</Boton>
        </div>

        <hr /> {/* Separador de inicio de sesión social */}
        
        <div className="social-login">
          <button className="social-button" id="google-login">
            Continuar con Google
            <i className="social-icon">
              <img src="/src/assets/google.svg" alt="Google" />
            </i>
          </button>
          <button className="social-button" id="apple-login">
            Continuar con Apple
            <FontAwesomeIcon icon={faApple} className="social-icon" />
          </button>
        </div>
      </div>
    </main>
  )
}

export default Login
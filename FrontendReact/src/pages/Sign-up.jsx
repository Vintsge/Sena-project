import './Sign-up.css'
import { useNavigate } from 'react-router-dom'
import Boton from '../components/Boton'

function SignUp() {
  const navigate = useNavigate()

  // Los campos "required" ya se validan en el navegador antes de llegar aquí
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/menu')
  }

  return (
    <main className="signup-container">
      <h1>Regístrate</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
            Nombre:
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label className="form-label">
            Teléfono:
            <input type="tel" name="phone" autoComplete="tel" required />
          </label>
          <label className="form-label select-label">
            Documento de identidad:
            <select name="documentType" required>
              <option value="">Seleccione una opción</option>
              <option value="cc">C.C</option>
              <option value="ti">Tarjeta de Identidad</option>
              <option value="ce">Documento Extranjero</option>
            </select>
          </label>
          <label className="form-label">
            Número de documento:
            <input type="text" name="document" required />
          </label>
          <label className="form-label">
            Fecha de nacimiento:
            <input type="date" name="birthdate" autoComplete="bday" required />
          </label>
          <label className="form-label select-label">
            Nivel de educación:
            <select name="educationLevel" required>
              <option value="">Seleccione una opción</option>
              <option value="primaria">Primaria</option>
              <option value="secundaria">Bachillerato (11°)</option>
              <option value="tecnico">Técnico</option>
              <option value="tecnologo">Tecnólogo</option>
              <option value="universitario">Universitario</option>
            </select>
          </label>
          <label className="form-label">
            Email:
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label className="form-label">
            Contraseña:
            <input type="password" name="password" autoComplete="new-password" required />
          </label>
          <label className="form-label">
            Confirmar contraseña:
            <input type="password" name="confirmPassword" autoComplete="new-password" required />
          </label>

          <div className="checkbox-container">
            <label className="checkbox-label">
              <input type="checkbox" name="terms" required />
              Acepto los términos y condiciones
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="privacy" required />
              Acepto las políticas de privacidad
            </label>
          </div>

          <div className="button-container">
            <Boton type="submit" id="signup-button">
              Registrarse
            </Boton>
          </div>
        </div>
      </form>
    </main>
  )
}

export default SignUp
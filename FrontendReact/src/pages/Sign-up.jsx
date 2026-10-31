import './Sign-up.css'
import Boton from '../components/Boton'

function SignUp() {
  return (
    <main className="signup-container">
        <h1>Regístrate</h1>
        <hr />
        <form>
            <div className="form-group">
                <label className="form-label">
                    Nombre:
                    <input type="text" name="name" required />
                </label>
                <label className="form-label">
                    Teléfono:
                    <input type="tel" name="phone" required />
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
                    <input type="date" name="birthdate" required />
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
                    <input type="email" name="email" required />
                </label>
                <label className="form-label">
                    Contraseña:
                    <input type="password" name="password" required />
                </label>
                <label className="form-label">
                    Confirmar contraseña:
                    <input type="password" name="confirmPassword" required />
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
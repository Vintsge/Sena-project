import './Menu.css';
import Graytainer from '../components/Graytainer';
import AddIcon from '../assets/Add.svg';
import Comparar from '../assets/comparar.svg';
import Write from '../assets/write.svg';
import Message from '../assets/message.svg';
import Inicio from '../assets/house.svg';
import History from '../assets/history.svg';
import User from '../assets/perfilUser.svg';


function Menu() {
  return (
    <main className="menu-main">
      <div className='midtics'>
        <h5 className="menu-title">Mindtics</h5>
        <hr />
      </div>
      <div className='menu-container'>
        
        <Graytainer image={AddIcon}>
          <div className='texto_container'>
              <p className='titles'>Nuevo Test</p>
              <p className='description'>Pruebate realizando el Test de tu elección</p>    
          </div>
        </Graytainer>
        <Graytainer image={Comparar} reverse={true}>
          <div className='texto_container'>
            <p className='titles'>Compare Tests</p>
            <p className='description'>Comparar los diferentes resultados entre los informes</p>
          </div>
        </Graytainer>
        <Graytainer image={Write}>
          <div className='texto_container'>
            <p className='titles'>Escritura</p>
            <p className='description'>Responda preguntas, describa situaciones y más...</p>
          </div>
        </Graytainer>
        <Graytainer image={Message} reverse={true}>
          <div className='texto_container'>
            <p className='titles'>Habla</p>
            <p className='description'>Grabe audios, describiendo su dia, entre otros...</p>
          </div>
        </Graytainer>
      </div>
      <footer className='toolbar-container'>
        <hr />
        <div className='toolsBar'>
          <div className='iconBar'>
            <img src = {Inicio} alt="Home page"/>
            <p>Inicio</p>
          </div>
          <div className='iconBar'>
            <img src= {History} alt="Historial" /> 
            <p>Historial</p>
          </div>
          <div className='iconBar'>
            <img src={User} alt="Perfil" />
            <p>Perfil</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 
export default Menu;
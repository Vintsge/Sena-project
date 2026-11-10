import './Menu.css';
import Graytainer from '../components/Graytainer';
import CardLink from '../components/CardLink';
import BottomNav from '../components/Bottomnav';
import AddIcon from '../assets/Add.svg';
import Comparar from '../assets/comparar.svg';
import Write from '../assets/write.svg';
import Message from '../assets/message.svg';


function Menu() {
  return (
    <main className="menu-main">
      <header className="midtics">
        <h5 className="menu-title">Mindtics</h5>
        <hr />
      </header>

      <div className="menu-container">
        <Graytainer image={AddIcon}>
          <div className="texto_container">
            <p className="titles">Nuevo Test</p>
            <p className="description">Pruébate realizando el Test de tu elección</p>
          </div>
        </Graytainer>
        <Graytainer image={Comparar} reverse={true}>
          <div className="texto_container">
            <p className="titles">Compare Tests</p>
            <p className="description">Compara los diferentes resultados entre los informes</p>
          </div>
        </Graytainer>
        <CardLink to="/select-writting">
          <Graytainer image={Write}>
            <div className="texto_container">
              <p className="titles">Escritura</p>
              <p className="description">Responde preguntas, describe situaciones y más...</p>
            </div>
          </Graytainer>
        </CardLink>
        <CardLink to="/select-speaking">
          <Graytainer image={Message} reverse={true}>
            <div className="texto_container">
              <p className="titles">Habla</p>
              <p className="description">Graba audios describiendo tu día, entre otros...</p>
            </div>
          </Graytainer>
        </CardLink>
      </div>

      <BottomNav />
    </main>
  );
}

export default Menu;
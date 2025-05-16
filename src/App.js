import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='C-principal'>

      <nav className='Menu'>
          <div className='tituloCarta'><p>Carta</p></div>
        <ul className='lista'>
            <li className='M-Contenido'><a href=''className='link'>Cafés</a></li>
            <li className='M-Contenido'><a href=''className='link'>Aguas</a></li>
            <li className='M-Contenido'><a href=''className='link'>Vinos</a></li>
            <li className='M-Contenido'><a href=''className='link'>Cervezas</a></li>
            <li className='M-Contenido'><a href=''className='link'>Refrescos</a></li>
            <li className='M-Contenido'><a href=''className='link'>Comidas</a></li>
            <li className='M-Contenido'><a href=''className='link'>Pica-Pica</a></li>
          </ul>
       </nav>  
         
            <section className='C-ImgInfo'>
                 <div className="Contenido"></div>
                 <div className="Contenido"></div>
                 <div className="Contenido"></div>
                 <div className="Contenido"></div>
                 <div className="Contenido"></div>
                 <div className="Contenido"><img src='img/maikel.jpeg' alt='Foto'/></div>
                 <div className="Contenido"></div>
                 <div className="Contenido"></div>
                 <div className="Contenido"></div>
                 <div className="Contenido"></div>
                 <div className="Contenido"></div>
                 <div className="Contenido"></div>
            </section>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='agradecimientos'>
        <h3>
          Por <span className='mi-nombre'><a href='https://www.linkedin.com/in/alejandro-roa-dev/'>Alejandro Roa</a></span>
          agradecimientos a <span className='empresa-freeCodeCamp'><a href='https://www.youtube.com/c/freeCodeCampEspañol'>freeCodeCamp Español</a></span>
        </h3>
      </div>
      
      <div className='contenedor-principal'>
        <h1>Estos son los mejores helados del MUNDO</h1>
        <Testimonio
        nombre='Helado de fresa'
        pais='España - Barcelona'
        imagen='CucuruchoFresa'
        alt='Cucurucho de fresa'
        cargo='color rosa y sabor fresa'
        empresa='Heladerias Manolo'
        testimonio='Soy un helado de fresa con sabor a fresa, bastante refrescante, con mi color y aromante, te gusta lo que ves, ya que la fresa 
        te mueve las papilas gustativas que tus ojos huelen.' />

        <Testimonio
        nombre='Helado de Platano'
        pais='Japón - Tokio'
        imagen='CucuruchoPlatano'
        alt='Helado de Platano'
        cargo='color amarillo y sabor anime'
        empresa='苺かき氷 片仮名'
        testimonio='びね及技でぎ大芸社コ一黒サレス業川ねまわレ行覧ソマイ必載提速テフヘヌ変稿ルネケ作部まだゅフ央森名ネコム善司がょおぜ各12求ひフ刑15包孤湖ラに。
        聞ぼ没家リさが第動しラばル国対さみ家討ノオヤ身給ラ経美ふぜ味實もイとて材各毎べはクン覚状ロ玉能国つさ。精てふ民働本ケテ順受りを辞育ーひぎ組図ケフヱヘ公出
        来ヒヌ変決済マ備27引ま試守険便のひン.' />

        <Testimonio
        nombre='Helado de sabores'
        pais='República Democrática del Congo'
        imagen='CucuruchoS'
        alt='Helado de sabores'
        cargo='sabores exitosos en su combinacion'
        empresa='Heladeria Tropical del Congo'
        testimonio='La combinación de helados más exitosa en el mundo hará que tus pupilas gustativas EXPLOTEN en mil y un pedazos, con la mejor
        elaboración aprobada por Michael Jackson el día de su nacimiento.' />
      </div>
    </div>
  );
}

export default App;

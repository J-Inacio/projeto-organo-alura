import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Anime from './components/Anime';
import Rodape from './components/Rodape';

function App() {

  const animes = [
    {
      nome:'Bleach',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome:'Boku no Hero',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome:'Demon Slayer',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome:'Dragon Ball',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    },
    {
      nome:'Naruto',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome:'One Punch Man',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7EB'
    }
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem])


  }

  return (
    <div className="App">
      <Banner />
      <Formulario animes={animes.map(anime => anime.nome)} aoPersonagemCadastrado = {personagem => aoNovoPersonagemAdicionado(personagem)} />

      {animes.map(anime => <Anime 
      key={anime.nome} 
      nome = {anime.nome} 
      corPrimaria={anime.corPrimaria} 
      corSecundaria={anime.corSecundaria}

      /*Filtrando os cards de acordo com o anime escolhido*/
      personagens={personagens.filter(personagem => personagem.anime == anime.nome)}
      />)}
      
      <Rodape />
    </div>
  );
}

export default App;

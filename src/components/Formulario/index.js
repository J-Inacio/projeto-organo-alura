import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [imagem, setImagem] = useState('')
    const [anime, setAnime] = useState('')

    /* Aqui está sendo criado uma função que vai ser a ação do botão*/
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPersonagemCadastrado ({
            nome,
            tipo,
            imagem,
            anime
        })
        setNome('')
        setTipo('')
        setImagem('')
        setAnime('')

    }

    return (
        <section className="formulario">
            {/* onSubmit é praticamente o onClickListener, porém o submit faz validação do formulário no HTML*/}
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do personagem</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome do Personagem" 
                    placeholder="Digite o nome do personagem"
                    valor={nome} 
                    aoAlterado = {valor => setNome(valor)}

                />
                <CampoTexto 
                obrigatorio={true}
                label="Tipo do Personagem" 
                placeholder="Protagonista, Antagonista, etc.." 
                valor = {tipo}
                aoAlterado = {valor => setTipo(valor)}
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true}
                label="Anime" 
                itens={props.animes}
                valor={anime}
                aoAlterado={valor => setAnime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
            

    )


}

export default Formulario
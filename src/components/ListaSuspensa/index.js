import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
       <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""> </option>

                {/*basicamente esse código diz que para cada item novo, eu retorno uma option.
                
                [].map - percorre a lsita e depois retorna uma nova lista atualizada. ou seja transforma alguma coisa em uma lista diferente.
                
                a propriedade key = serve para dizer ao react que aquele nome é único para que ele não perca o controle de quando ele deve atualizar a lista novamente quando for inserido um novo valor nela.
                */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
       </div>     
    )


}

export default ListaSuspensa
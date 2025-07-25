import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label className="label">{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor} className="lista-suspensa">
                <option value=""></option>
               {props.itens.map(item => {
                return <option key={item}>{item}</option>
               })}
            </select>
        </div>
    );
}

export default ListaSuspensa;
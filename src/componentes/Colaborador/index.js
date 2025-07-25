import './Colaborador.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({ id, nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                size={25}
                className="deletar"
                onClick={() => aoDeletar(id)}
                title="Deletar colaborador"
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
};

export default Colaborador;
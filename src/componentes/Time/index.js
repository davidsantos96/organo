import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';


const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (
        colaboradores.length > 0 && (
            <section
                className='time'
                style={{
                    backgroundImage: 'url(/imagens/fundo.png)',
                    backgroundColor: hexToRgba(time.cor, 0.6)
                }}
            >
                <div className="cabecalho-time">
                    <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
                    <input
                        onChange={evento => mudarCor(evento.target.value, time.id)}
                        value={time.cor}
                        type='color'
                        className='input-cor'
                        title="Mudar cor do time"
                    />
                </div>
                <div className='colaboradores'>
                    {colaboradores.map(colaborador => (
                        <Colaborador
                            key={colaborador.id}
                            id={colaborador.id}
                            nome={colaborador.nome}
                            imagem={colaborador.imagem}
                            cargo={colaborador.cargo}
                            corDeFundo={time.cor}
                            aoDeletar={aoDeletar}
                        />
                    ))}
                </div>
            </section>
        )
    );
};

export default Time;
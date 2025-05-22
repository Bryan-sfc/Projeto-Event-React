import "./Lista.css";
import Editar from "../../assets/img/Editar.svg"
import Excluir from "../../assets/img/Excluir.svg"

const Lista = (props) => {
    return (
        <>
            <section className="listagem">
                <h1>{`Lista de ${props.titulo_lista}`}</h1>
                <hr className="linha_titulo" />

                <div className="tabela layout_grid">
                    <table>
                        <thead>
                            <tr className="tabela_cabecalho">
                                <th>{props.titulo}</th>
                                <th style={{ display: props.visibilidade }}>Tipo Evento</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>

                        <tbody>
                            {props.lista && props.lista.length > 0 ? (
                                props.lista.map((item) => (
                                    <tr className="item_lista"
                                        key={item.idTipoEvento}
                                    >

                                        <td data-cell={props.titulo}>{item.tituloTipoEvento}</td>

                                        <td data-cell="Tipo Evento" style={{ display: props.visibilidade }} >xxxxxxxxx</td>

                                        <td data-cell="Editar">
                                            <img src={Editar}
                                                alt="Caneta"
                                                id="mensagem"
                                                onClick={() => props.funcEditar(item)} />
                                        </td>

                                        <td data-cell="Excluir">
                                            <img src={Excluir}
                                                alt="Lixeira"
                                                id="mensagem"
                                                onClick={() => props.funcDeletar(item)} />
                                        </td>
                                    </tr>
                                ))
                            ) :
                                (
                                    <p>Nenhum Tipo Evento Encontrado</p>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Lista;
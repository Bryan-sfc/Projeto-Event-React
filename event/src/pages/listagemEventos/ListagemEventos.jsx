import { useEffect, useState } from "react";
import api from "../../services/Services";
import Modal from "../../components/modal/Modal";

import "./ListagemEventos.css"

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import Comentario from "../../assets/img/Comentario.svg"
import Informacao from "../../assets/img/Informacao.svg"
import Toggle from "../../components/toggle/Toggle";

const ListagemEventos = () => {
    const [listaEventos, setListaEventos] = useState([]);
    const [tipoModal, setTipoModal] = useState("");     //"descricaoevento" ou "comentario"
    const [dadosModal, setDadosModal] = useState({});   // descrição, idEvento, etc.
    const [modalAberto, setModalAberto] = useState(false);

    async function listarEventos() {
        try {
            const resposta = await api.get("Eventos");

            setListaEventos(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarEventos();
    }, [])

    function abrirModal(tipo, dados) {
        //Tipo de modal
        //dados
        setModalAberto(true);
        setTipoModal(tipo);
        setDadosModal(dados);
    }

    return (
        <>
            <Header
                user="Aluno"
                botao_logar="none"
            />
            <main>
                <section className="layout_grid listagem_section">
                    <div className="titulo_listagem">
                        <h1>Eventos</h1>
                        <hr />
                    </div>

                    <div className="listagem_eventos">
                        <select name="eventos">
                            <option value="" disabled selected>Todos os Eventos</option>
                            <option value="">xxxxxxxx</option>
                        </select>
                    </div>

                    <div className="list">
                        <table>
                            <thead>
                                <tr className="list_tabela">
                                    <th>Titulo</th>
                                    <th>Data do Evento</th>
                                    <th>Tipo Evento</th>
                                    <th>Descrição</th>
                                    <th>Comentários</th>
                                    <th>Participar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaEventos.length > 0 ? (
                                    listaEventos.map((item) => (
                                        <tr className="list_presenca">
                                            <td data-cell="Titulo">{item.nomeEvento}</td>
                                            <td data-cell="Data do Evento">{new Date(item.dataEvento).toLocaleDateString('pt-BR')}</td>
                                            <td data-cell="Tipo Evento">{item.tiposEvento.tituloTipoEvento}</td>

                                            <td data-cell="Descricao">
                                                <img src={Informacao}
                                                    alt="Exclamação de Descrição"
                                                    onClick={() => abrirModal("descricaoEvento", { descricao: item.descricao })}
                                                />
                                            </td>

                                            <td data-cell="Comentario">
                                                <img src={Comentario}
                                                    alt="Comentário"
                                                    onClick={() => abrirModal("comentarios", { idEvento: item.idEvento })}
                                                />
                                            </td>

                                            <td data-cell="Presenca"><Toggle /></td>
                                        </tr>
                                    ))
                                ) :
                                    (
                                        <p>Nenhum evento encontrado</p>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <Footer visibilidade="none" />

            {modalAberto && (
                <Modal
                    titulo={tipoModal === "descricaoEvento" ? "Descrição do evento" : "Comentário"}

                    //estou verificando qual é o tipo de modal!
                    tipoModel = {tipoModal}

                    idEvento = {dadosModal.idEvento}

                    descricao = {dadosModal.descricao}
                />
            )}
        </>
    );
}

export default ListagemEventos;
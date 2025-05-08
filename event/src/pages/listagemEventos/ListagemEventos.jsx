import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./ListagemEventos.css"
import Comentario from "../../assets/img/Comentario.svg"
import PresencaSim from "../../assets/img/PresencaSim.svg"
import PresencaNao from "../../assets/img/PresencaNao.svg"

const ListagemEventos = () => {
    return (
        <>
            <Header />
            <main>
                <section className="layout_grid listagem_section">
                    <div className="titulo_listagem">
                        <h1>Eventos</h1>
                        <hr />
                    </div>

                    <div className="listagem_eventos">
                        <select name="eventos" id="">
                            <option value="" disabled selected>Todos os Eventos</option>
                            <option value="">XXXXXXXX</option>
                            <option value="">XXXXXXXX</option>
                            <option value="">XXXXXXXX</option>
                        </select>
                    </div>

                    <div className="list">
                        <table>
                                <tr className="list_tabela">
                                    <th>Titulo</th>
                                    <th>Tipo Evento</th>
                                    <th>Comentários</th>
                                    <th>Participar</th>
                                </tr>

                                <tr className="list_presenca">
                                    <td>Nome do Evento</td>
                                    <td>Tipo Evento</td>
                                    <td data-cell="Comentario"><img src={Comentario} alt="" /></td>
                                    <td data-cell="PresencaSim"><img src={PresencaSim} alt="" /></td>
                                </tr>
                        </table>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ListagemEventos;
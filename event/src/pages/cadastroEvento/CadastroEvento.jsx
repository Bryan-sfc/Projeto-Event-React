import { useState } from "react";
import api from "../../services/Services";


import Imagem from "../../assets/img/CadastroEvento.svg"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Swal from "sweetalert2";

const CadastroEvento = () => {
    const [listaTipoEvento, setlistaTipoEvento] = useState([]);
    const [tipoEvento, setTipoEvento] = useState("");

    const [instituicoes, setInstituicoes] = useState("BE86171E-FD1E-40DC-9BA6-85313340FCEA");
    const [data, setData] = useState("");

    const [evento, setEvento] = useState("");

    function alertar(icone, mensagem) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: icone,
            title: mensagem
        });
    }

    async function listarTipoEvento() {
        try {
            const resposta = await api.get("TiposEventos");

            setlistaTipoEvento(resposta.data)
        } catch (error) {
            console.log(error);
        }
    }

    function cadastrarEvento() {
        alert("conectando")
    }

    useState(() => {
        listarTipoEvento();
    }, []);

    return (
        <>
            <Header
                user="Administrador"
                botao_logar="none"
            />
            <main>
                <Cadastro
                    titulo_cadastro="Cadastro de Eventos"
                    campo_placeholder="Nome"
                    campo_descricao="Descrição"

                    // visibilidade="none"
                    botao="Cadastrar"
                    banner_img={Imagem}

                    funcCadastro={cadastrarEvento}

                    // Obter valores da descrição

                    //Obter data dada pelo usuário
                    valorInputDescriacao={data}
                    setValorInputDescricao={setData}

                    // Obter resposta do usuário no select TipoEvento
                    valorSelectTpEvento={tipoEvento}
                    setValorSelectTpEvento={setTipoEvento}

                    // Obter resposta do usuário no select Instituições
                    valorSelectInstituicao={instituicoes}
                    setValorSelectInstituicao={setInstituicoes}

                    // Listar TipoEvento e instituições no select //
                    lista={listaTipoEvento}

                    // Valores a serem aplicados ao evento
                    setValorInput={setEvento}
                    setValorInputData={setEvento}
                />

                <Lista
                    titulo_lista="Eventos"
                    titulo="Nome"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroEvento;
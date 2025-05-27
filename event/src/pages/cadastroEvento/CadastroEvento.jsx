import { useState } from "react";
import api from "../../services/Services";


import Imagem from "../../assets/img/CadastroEvento.svg"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Swal from "sweetalert2";

const CadastroEvento = () => {
    const [evento, setEvento] = useState("");
    const [listaEvento, setListaEvento] = useState([]);
    const [listaInsituicao, setlistaInsituicao] = useState([]);

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

    async function listarInstituicao() {
        try {
            const resposta = await api.get("Instituicoes");

            setlistaInsituicao(resposta.data)

        } catch (error) {

        }
    }

    function cadastrarEvento() {

    }

    useState(() => {
        listarInstituicao();
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
                    setValorInput={setEvento}

                    tipoListaInst="Instituicoes"
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
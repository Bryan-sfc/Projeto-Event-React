import { useEffect, useState } from "react";
import api from "../../services/Services";

import Imagem from "../../assets/img/CadastroEvento.svg"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import Swal from "sweetalert2";

const CadastroEvento = () => {
    const [listaEvento, setListaEvento] = useState([]);
    const [listaTipoEvento, setlistaTipoEvento] = useState([]);
    const [instituicoes, setInstituicoes] = useState("BE86171E-FD1E-40DC-9BA6-85313340FCEA");
    const [tipoEvento, setTipoEvento] = useState("");
    const [dataEvento, setDataEvento] = useState("");
    const [descricao, setDescricao] = useState("");
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

    async function cadastrarEvento(e) {
        e.preventDefault();

        if (evento.trim() !== "") {
            try {
                await api.post("eventos", { DataEvento: dataEvento, NomeEvento: evento, Descricao: descricao, IdTipoEvento: tipoEvento, IdInstituicao: instituicoes });

                alertar("success", "Cadastro realizado com sucesso")
                setEvento("");
                setDataEvento("");
                setDescricao("");
                setTipoEvento("");

            } catch (error) {
                alertar("error", "Erro! Entre em contato com o suporte!")
                console.log(error);

                console.log({
                    DataEvento: dataEvento,
                    NomeEvento: evento,
                    Descricao: descricao,
                    IdTipoEvento: tipoEvento,
                    IdInstituicao: instituicoes
                });
            }
        } else {
            alertar("warning", "Preencha o campo!")
        }
    }

    async function listarEvento() {
        try {
            const resposta = await api.get("Eventos");

            setListaEvento(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function deletarEvento(id) {
        Swal.fire({
            title: 'Tem Certeza?',
            text: "Essa ação não poderá ser desfeita!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#B51D44',
            cancelButtonColor: '#000000',
            confirmButtonText: 'Sim, apagar!',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await api.delete(`eventos/${id.idEvento}`);
                alertar("success", "Evento Excluido!");
            }
        }).catch(error => {
            console.log(error);
            alertar("error", "Erro ao Excluir!");
        })
    }

    async function editarEvento(eventos) {
        const { value: novoEvento } = await Swal.fire({
            title: "Modifique seu Tipo Evento",
            input: "text",
            confirmButtonColor: '#B51D44',
            cancelButtonColor: '#000000',
            inputLabel: "Novo Evento",
            inputValue: eventos.nomeEvento,
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return "O campo não pode estar vazio!";
                }
            }
        });
        if (novoEvento) {
            try {
                await api.put(`eventos/${eventos.idEvento}`,
                    { NomeEvento: novoEvento });
                alertar("success", "Evento Modificado!")
            } catch (error) {
                console.log(error);
            }
            Swal.fire(`Seu novo Tipo Evento: ${novoEvento}`);
        }
    }

    useEffect(() => {
        listarEvento();
        listarTipoEvento();
    }, [listaEvento]);

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
                    botao="Cadastrar"
                    banner_img={Imagem}

                    valorInput={evento}
                    setValorInput={setEvento}

                    //Cadastrar evento
                    funcCadastro={cadastrarEvento}

                    // Obter data
                    valorData={dataEvento}
                    setValorData={setDataEvento}

                    //Obter descricao 
                    valorInputDescricao={descricao}
                    setValorInputDescricao={setDescricao}

                    // Obter TipoEvento 
                    valorTpEvento={tipoEvento}
                    setValorTpEvento={setTipoEvento}

                    // Obter Instituições
                    valorInstituicao={instituicoes}
                    setValorInstituicao={setInstituicoes}

                    // Listar TipoEvento
                    lista={listaTipoEvento}
                />

                <Lista
                    titulo_lista="Eventos"
                    titulo="Nome"

                    tipoLista="Eventos"
                    lista={listaEvento}

                    funcDeletar={deletarEvento}
                    funcEditar={editarEvento}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroEvento;
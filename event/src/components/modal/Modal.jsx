import "./Modal.css"
import api from "../../services/Services";
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

import ImgDeletar from "../../assets/img/Excluir.svg"
import { useAuth } from "../../contexts/authContext";

const Modal = (props) => {
    const [comentarios, setComentarios] = useState([]);
    const [novoComentario, setNovoComentario] = useState("");

    const { usuario } = useAuth();

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

    async function listarComentarios() {
        try {
            const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`)

            setComentarios(resposta.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarComentarios();
    }, [])

    async function cadastrarComentario(comentario) {
        if (comentario.trim() != "") {
            try {
                await api.post("ComentariosEventos", { idUsuario: usuario.idUsuario, idEvento: props.idEvento, descricao: comentario });

                alertar("success", "Cadastro realizado com sucesso");
            } catch (error) {
                console.log(error);
                alertar("error", "Erro! Entre em contato com o suporte!");
            }
        } else {
            alertar("warning", "Preencha o campo!");
        }
    }

    async function deletarComentario(idComentario) {
        try {
            await api.delete(`comentarioEventos/${idComentario}`)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="model-overlay" onClick={props.fecharModal}></div>
            <div className="model">
                <h1>{props.titulo}</h1>
                <div className="model_conteudo">
                    {props.tipoModel === "descricaoEvento" ? (
                        <p>{props.descricao}</p>
                    ) : (
                        <>
                            {comentarios.map((item) => (
                                <div key={item.idComentarioEvento}>
                                    <strong>{item.usuario.nomeUsuario}</strong>

                                    <img
                                        src={ImgDeletar}
                                        alt="Deletar"
                                        onClick={() => deletarComentario(item.idComentarioEvento)}
                                    />

                                    <p>{item.descricao}</p>
                                    <hr />
                                </div>
                            ))}
                            <div>
                                <input
                                    type="text" placeholder="Escreva seu comentário..."
                                    value={novoComentario}
                                    onChange={(e) => setNovoComentario(e.target.value)}
                                />

                                <button
                                    onClick={() => cadastrarComentario(novoComentario)}
                                    className="botao">
                                    cadastrar
                                </button>
                            </div  >
                        </>
                    )}
                </div>
            </div >
        </>
    )
}

export default Modal
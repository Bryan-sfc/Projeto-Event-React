import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import ImgDeletar from "../../assets/img/Excluir.svg"
import api from "../../services/Services";
import "./Modal.css"

const Modal = (props) => {
    const [comentarios, setComentarios] = useState([]);

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
            const resposta = await api.get(`ComentariosEventos/ListarSomenteExibe?id=${props.idEvento}`);

            setComentarios(resposta.data);

            console.log(resposta);

        } catch (error) {
            console.log(error);
        }
    }

    async function cadastrarComentario() {
        try {
            await api.post()
        } catch (error) {
            alertar("error", "Erro ao cadastrar comentário")
        }
    }

    useEffect(() => {
        listarComentarios();
    }, [])

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
                                <div key={item.idComentario}>
                                    <strong>{item.usuario.nomeUsuario}</strong>

                                    <img
                                        src={ImgDeletar}
                                        alt="Deletar"
                                    />

                                    <p>{item.descricao}</p>
                                    <hr />
                                </div>
                            ))}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Escreva seu comentário..." />

                                <button className="botao">
                                    cadastrar
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div >
        </>
    )
}

export default Modal
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Imagem from "../../assets/img/CadastroTipoUsuario.svg"
import Lista from "../../components/lista/Lista";

const CadastroTipoUsuario = () => {
    return (
        <>
            <Header
                user="Administrador"
            />
            <main>
                <Cadastro
                    titulo_cadastro="Cadastro de Tipo Usuário"
                    campo_placeholder="Titulo"
                    visibilidade="none"
                    botao="Cadastrar"
                    banner_img={Imagem}
                />

                <Lista
                    titulo_lista="Tipo Usuário"
                    titulo="Titulo"
                    visibilidade="none"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroTipoUsuario;
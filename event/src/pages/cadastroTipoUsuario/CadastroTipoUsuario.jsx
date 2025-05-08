import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Imagem from "../../assets/img/CadastroTipoUsuario.svg"
import Lista from "../../components/lista/Lista";

const CadastroTipoUsuario = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Tipo Usuário"
                    campoPlaceholder="Titulo"
                    visibilidade="none"
                    NomeDoBotao="Cadastrar"
                    banner_img={Imagem}
                />

                <Lista
                    tituloLista="Tipo Usuário"
                    titulo="Titulo"
                    visibilidade="none"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroTipoUsuario;
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Imagem from "../../assets/img/TipoDeEvento.svg"
import Lista from "../../components/lista/Lista";

const CadastroTipoEvento = () => {
    return (
        <>
            <Header
                user="Administrador"
                botao_logar="none"
            />
            <main>
                <Cadastro
                    titulo_cadastro="Cadastro de Tipo Eventos"
                    campo_placeholder="Titulo"
                    visibilidade="none"
                    botao="Cadastrar"
                    banner_img={Imagem}
                />

                <Lista
                    titulo_lista="Tipo Eventos"
                    titulo="Titulo"
                    visibilidade="none"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroTipoEvento;
import Imagem from "../../assets/img/CadastroEvento.svg"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroEvento = () => {
    return (
        <>
            <Header
                user="Administrador"
            />
            <main>
                <Cadastro
                    titulo_cadastro="Cadastro de Eventos"
                    campo_placeholder="Nome"
                    // visibilidade="none"
                    botao="Cadastrar"
                    banner_img={Imagem}
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
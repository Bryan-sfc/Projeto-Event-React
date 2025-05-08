import Imagem from "../../assets/img/CadastroEvento.svg"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroEvento = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Eventos"
                    campoPlaceholder="Nome"
                    // visibilidade="none"
                    NomeDoBotao="Cadastrar"
                    banner_img={Imagem}
                />

                <Lista
                    tituloLista="Eventos"
                    titulo="Nome"
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroEvento;
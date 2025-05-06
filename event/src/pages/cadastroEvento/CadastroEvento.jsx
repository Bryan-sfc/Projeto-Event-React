import Imagem from "../../assets/img/CadastroEvento.svg"
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const CadastroEvento = () => {
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Eventos"
                    campoPlaceholder="Nome"
                    visibilidade="none"
                    NomeDoBotao="Cadastrar"
                    banner_img={Imagem}
                />
            </main>
            <Footer />
        </>
    )
}

export default CadastroEvento;
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Imagem from "../../assets/img/TipoDeEvento.svg"
import Lista from "../../components/lista/Lista";

const CadastroTipoEvento = () => {
    return (
        <>
            <Header/>
            <main>
                <Cadastro
                tituloCadastro="Cadastro de Tipo Eventos"
                campoPlaceholder="Titulo"
                visibilidade="none"
                NomeDoBotao="Cadastrar"
                banner_img={Imagem}
                />

                <Lista
                tituloLista="Tipo Eventos"
                titulo="Titulo"
                visibilidade="none"
                />
            </main>
            <Footer/>
        </> 
    )
}

export default CadastroTipoEvento;
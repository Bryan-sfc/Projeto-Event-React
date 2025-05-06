import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Imagem from "../../assets/img/TipoDeEvento.svg"

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
            </main>
            <Footer/>
        </> 
    )
}

export default CadastroTipoEvento;
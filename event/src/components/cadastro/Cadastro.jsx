import "./Cadastro.css"
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return (
        <section className="layout_grid section_cadastro">
            <div className="cadastro_titulo">
                <h1>{props.titulo_cadastro}</h1>
                <hr />
            </div>

            <form onSubmit={props.funcCadastro} className="form_cadastro">
                <div className="img_cadastro">
                    <img src={props.banner_img} alt="Imagem do Cadastro" />
                </div>

                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <input 
                        type="text" 
                        placeholder={props.campo_placeholder} 
                        value={props.valorInput}

                        onChange={(e) => props.setValorInput(e.target.value)}
                        />
                    </div>

                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <select name="Gênero" id="">
                            <option value="" disabled selected>Tipo Evento</option>
                            <option value="">Esportes</option>
                        </select>
                    </div>
                    <Botao botao={props.botao} />
                </div>
            </form>
        </section>
    )
}

export default Cadastro;
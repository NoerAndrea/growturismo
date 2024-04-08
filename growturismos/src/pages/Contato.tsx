import { Fragment } from "react/jsx-runtime";
import { Footer } from "../components/functionals/Footer";
import { Header } from "../components/styled/Header";
import { Nav } from "../components/styled/Nav";
import { Content } from "../components/styled/Content";
import { Button } from "../components/styled/Button";
import { listaLinks } from "../data/links";

export function Contato(){
    return(
        <Fragment>
            <Header>
                <div>
                    <h1>
                        <a href="/">GrowTravel</a>
                    </h1>
                    <Nav>
                        <ul>
                            <li>
                                <a href="/quem-somos">Quem Somos</a>
                            </li>
                            <li>
                                <a href="/servicos">Serviços</a>
                            </li>
                            <li>
                                <a href="/planos">Planos</a>
                            </li>
                            <li>
                                <a href="/contato">Contato</a>
                            </li>
                        </ul>
                    </Nav>
                </div>
            </Header>
            <Content minWidth="420xp">
                <div>
                    <h1>Formulário</h1>
                    <form>
                        <div>
                            <label> Nome:</label>
                            <input type="text" name="nome"></input>
                        </div>
                        <div>
                            <label> E-mail:</label>
                            <input type="email" name="email"></input>
                        </div>
                        <div>
                            <label> Telefone:</label>
                            <input type="text" name="telefone"></input>
                        </div>
                        <div>
                            <label> Mensagem:</label>
                            <input type="text" name="mensagem"></input>
                        </div>
                        <div>
                        <Button type="submit" width="420px" padding="20px" backgroundColor="rgb(18, 42, 87)" color="white">
                            Enviar         
                        </Button>
                        </div>
                    </form>
                </div>
            </Content>
            <Footer listaLinks={listaLinks}/>
        </Fragment>
    )
}
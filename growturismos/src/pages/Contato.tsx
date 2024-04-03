import { Fragment } from "react/jsx-runtime";
import { Footer } from "../components/styled/Footer";
import { Header } from "../components/styled/Header";
import { Nav } from "../components/styled/Nav";

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
           <h1>Contato</h1>
           <Footer>
            <div>
                <p>&copy;2024 Full Stack Growdev</p>
                <p>17ª Edição</p>
            </div>
           </Footer>
        </Fragment>
    )
}
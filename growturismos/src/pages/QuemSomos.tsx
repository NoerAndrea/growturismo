import { Fragment } from "react/jsx-runtime";
import { Footer } from "../components/functionals/Footer";
import { Header } from "../components/styled/Header";
import { Nav } from "../components/styled/Nav";
import { Content } from "../components/styled/Content";
import { listaLinks } from "../data/links";

import imagem2 from "../assets/home.svg"

export function QuemSomos(){
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
            <Content >
                <div>
                    <img src={imagem2} alt="Banner Aeroporto" />
                </div>
                <div>
                    <h2>
                        | Quem Somos
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat cumque facere dignissimos repellat corporis aliquam dolore alias, provident mollitia saepe officia eum suscipit rem iusto id. Temporibus quis quisquam ullam.
                    </p>
                    
                </div>
            </Content>
            <Footer listaLinks={listaLinks}/>
        </Fragment>
    )
}
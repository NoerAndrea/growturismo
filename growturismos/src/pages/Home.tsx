import { Fragment } from "react/jsx-runtime";
//importação do link
import { Footer } from "../components/functionals/Footer";
import { Header } from "../components/styled/Header";
import { Nav } from "../components/styled/Nav";
import { Content } from "../components/styled/Content";
import { Button } from "../components/styled/Button";

import imagem1 from "../assets/home.svg"
import { listaLinks } from "../data/links";

export function Home(){
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
                <Content minHeight="200px">
                    <div>
                        <h1>GrowTravel</h1>
                        <p>O melhor serviço para você!</p>
                        <Button width="200px" padding="20px" backgroundColor="rgb(18, 42, 87)" color="white">
                            Saiba mais!
                        </Button>
                    </div>
                    <div>
                        <img src={imagem1} alt="banner de apresentação" />
                    </div>  
                </Content>
                
                <Footer listaLinks={listaLinks}/>
        </Fragment>
    )
}
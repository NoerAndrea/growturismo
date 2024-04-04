import { Fragment } from "react/jsx-runtime";
import { Header } from "../components/styled/Header";
import { Nav } from "../components/styled/Nav";
import { Footer } from "../components/styled/Footer";
import { Content } from "../components/styled/Content";
import { Card } from "../components/styled/Card";
import { Button } from "../components/styled/Button";

export function Planos(){
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
            <Content>
                <Card border="3px solid rgb(18, 42, 87);">
                        <div>
                            <h1>Plano 1</h1>
                            <hr/>
                            <ul>
                                <li>Suporte 24h</li>
                                <li>Serviços de quarto</li>
                                <li>Guia turístico</li>
                            </ul>
                            <Button width="200px" padding="20px" backgroundColor="rgb(18, 42, 87)" color="white">Saiba Mais!</Button>
                        </div>
                    </Card>  
                    <Card border="3px solid rgb(18, 42, 87);">
                        <div>
                            <h1>Plano 2</h1>
                            <hr/>
                            <ul>
                                <li>Suporte 24h</li>
                                <li>Serviços de quarto</li>
                                <li>Guia turístico</li>
                                <li>Roteiros de trilhas</li>
                                <li>Serviços personalizado</li>
                            </ul>
                            <Button width="200px" padding="20px" backgroundColor="rgb(18, 42, 87)" color="white">Saiba Mais!</Button>
                        </div>
                    </Card>  
                    <Card border="3px solid rgb(18, 42, 87);">
                        <div>
                            <h1>Plano 3</h1>
                            <hr/>
                            <ul>
                                <li>Suporte 24h</li>
                                <li>Serviços de quarto</li>
                                <li>Guia turístico</li>
                                <li>Roteiros de trilhas</li>
                                <li>Serviços personalizado</li>
                                <li>Área Vip</li>
                            </ul>
                            <Button width="200px" padding="20px" backgroundColor="rgb(18, 42, 87)" color="white">Saiba Mais!</Button>
                        </div>
                    </Card>   
            </Content>
           <Footer>
            <div>
                <p>&copy;2024 Full Stack Growdev</p>
                <p>17ª Edição</p>
            </div>
           </Footer>
        </Fragment>
    )
}
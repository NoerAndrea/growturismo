import { Fragment } from "react/jsx-runtime";
import { Footer } from "../components/styled/Footer";
import { Header } from "../components/styled/Header";
import { Nav } from "../components/styled/Nav";
import { Content } from "../components/styled/Content";

import imagem3 from "../assets/hotel.svg"
import imagem4 from "../assets/roteiro.svg"
import imagem5 from "../assets/viagens.svg"
import { Button } from "../components/styled/Button";
import { Card } from "../components/styled/Card";

export function Servicos(){
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
                
                    <Card>
                        <div>
                            <img src={imagem3} alt="Serviços de hospedagens" />
                            <h2>Roteiros</h2>
                            <Button width="150px" padding="10px" backgroundColor="transparent" color="rgb(18, 42, 87)"> Saiba Mais</Button>
                        </div>
                    </Card>               
                
                    <Card>
                        <div>
                            <img src={imagem4} alt="Serviços de hospedagens" />
                            <h2>Roteiros</h2>
                            <Button width="150px" padding="10px" backgroundColor="transparent" color="rgb(18, 42, 87)"> Saiba Mais</Button>
                        </div>
                    </Card>
                
                    <Card>
                    <div>
                        <img src={imagem5} alt="Serviços de hospedagens" />
                        <h2>Roteiros</h2>
                        <Button width="150px" padding="10px" backgroundColor="transparent" color="rgb(18, 42, 87)"> Saiba Mais</Button>
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
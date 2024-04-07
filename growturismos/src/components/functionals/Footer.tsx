//resolução de conflito de nomes de componentes estilizados e funcionais
import { Links } from "../../data/links"
import { Footer as FooterStyled } from "../styled/Footer"
import { Link } from "../styled/Link"

interface FooterProps{
    listaLinks: Array<Links>
}

export function Footer(props: FooterProps){
    return(
        <FooterStyled>
            <div>
                <p>&copy;2024 Full Stack Growdev</p>
                {props.listaLinks.map((item)=>(
                    <Link href={item.url} target="_blank">{item.text}</Link>
                ))}
            </div>
        </FooterStyled>
    )
}
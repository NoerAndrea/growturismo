import { Fragment } from "react/jsx-runtime";
import { Footer } from "../components/styled/Footer";

export function Home(){
    return(
        <Fragment>
           <h1>Home</h1>
           <Footer>
            <div>
                <p>&copy;2024 Full Stack Growdev</p>
                <p>17ª Edição</p>
            </div>
           </Footer>
        </Fragment>
    )
}
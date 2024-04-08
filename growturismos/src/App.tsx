  import { Fragment } from "react/jsx-runtime";
  import { AppRoutes } from "./config/routes/AppRoutes";
  import { GlobalStyles } from "./config/global/GlobalStyles";
import { ThemeProvider } from "styled-components";
//import { darkTheme } from "./config/themes/dark";
import { lightTheme } from "./config/themes/light";

  export function App(){
    return(
      <Fragment>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles/>
          <AppRoutes/>
        </ThemeProvider>
      </Fragment>
    )
  }
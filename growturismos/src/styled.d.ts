//arquivo de definições de tipo para uma determinada ferramente
//primeiro arquivo
import "styled-components";

//era desta forme e quero desta forma
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    fontColor: string;
  }
}
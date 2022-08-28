import { createGlobalStyle } from "styled-components";

import reset from "./reset";
import more from "./more";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${more}
`;

export default GlobalStyle;

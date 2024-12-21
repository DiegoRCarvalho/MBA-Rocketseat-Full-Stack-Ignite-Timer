import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" /> 
      <Button variant="secondary" /> 
      <Button variant="success" /> 
      <Button variant="danger" /> 
      <Button /> 

      {/* Para funcionar, o GlobalStyle tem que ficar dentro do ThemeProvider*/}
      <GlobalStyle />
    </ThemeProvider >
  )
}

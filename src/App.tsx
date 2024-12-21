import { ThemeProvider } from "styled-components";
import { deafultTheme } from "./styles/themes/default";
import { Button } from "./components/Button";

export function App() {

  return (
    <ThemeProvider theme={deafultTheme}>
      <Button variant="primary" /> 
      <Button variant="secondary" /> 
      <Button variant="success" /> 
      <Button variant="danger" /> 
      <Button /> 
    </ThemeProvider >
  )
}

import { Container } from "./style"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export function Details() {
  return(
    <Container>
      <Header/>
      <Button title="Entrar" loading />
      
    </Container>
  )
}
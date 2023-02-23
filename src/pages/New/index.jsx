import { Container, Form } from "./style";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"

export function New() {
  return(
    <Container>
        <Header/>
        
      <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
              <a href="/">voltar</a>
            </header>
            <Input placeholder="Título"/>
            <Textarea placeholder="Observações"/>
          </Form>
      </main>
    </Container>
  )
}
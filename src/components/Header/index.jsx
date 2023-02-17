import { Container, Profile } from "./style";

export function Header() {
  return(
    <Container>
      <Profile>
        <img src="https://github.com/alexjjunio.png" alt="Foto do usúario" />
        <div>
          <span>Bem-vindo</span>
          <strong>Alex Junio Moreira</strong>
        </div>
      </Profile>
    </Container>
  )
}
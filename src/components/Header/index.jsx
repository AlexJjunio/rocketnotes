import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout} from "./style";

export function Header() {
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/alexjjunio.png" alt="Foto do usúario" />
        <div>
          <span>Bem-vindo</span>
          <strong>Alex Junio Moreira</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
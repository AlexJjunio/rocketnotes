import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout} from "./style";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth()
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/alexjjunio.png" alt="Foto do usúario" />
        <div>
          <span>Bem-vindo</span>
          <strong>Alex Junio Moreira</strong>
        </div>
      </Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
import {Container, Brand, Menu, Search,Content, NewNote} from './style';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';


export function Home() {
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li>
          <ButtonText title="Todos" isActive/>
        </li>
        <li>
          <ButtonText title="Frontend"/>
        </li>
        <li>
          <ButtonText title="Node"/>
        </li>
        <li>
          <ButtonText title="React"/>
        </li>
      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewNote>

      </NewNote>
    </Container>
  );
}
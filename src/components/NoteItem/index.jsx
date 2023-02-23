import { FiPlus, FiX} from 'react-icons/ri';

import { Container } from './style'

export function NoteItem(isNew, value, onClick, ...rest) {
  <Container>
    <input 
      type="text" 
      value={value}
      readOnly={!isNew}
      {...rest}
    />

    <button 
      type='button'
      onClick={onClick}  
    >
      { isNew ? <FiPlus/> : <FiX/>}
    </button>
  </Container>
}
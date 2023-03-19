import { FiPlus, FiX} from 'react-icons/fi';

import { Container } from './style'

export function NoteItem({isNew = false , value, onClick, ...rest}) {
  return (
    <Container>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button 
        type='button'
        className={isNew ? 'button-add' : 'button-delete'}
        onClick={onClick} 
      >
        { isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  )
}
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  color: ${({theme}) => theme.COLORS.GRAY_300 };
  background-color: ${({theme, isNew}) => isNew ? 'tranparent' : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 10px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({theme}) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({theme}) => theme.COLORS.ORANGE};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({theme}) => theme.COLORS.WHITE };
    background: transparent;

    border: none;
    

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300 };
    }


  }
`;
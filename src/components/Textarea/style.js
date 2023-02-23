import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  color: ${({theme}) => theme.COLORS.WHITE};

  border: none;
  resize: vertical;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 10px;

  &::placeholder {
  color: ${({theme}) => theme.COLORS.GRAY_300};
  }
`;
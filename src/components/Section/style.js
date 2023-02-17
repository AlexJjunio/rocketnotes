import styled from "styled-components";

export const Container = styled.section`
  margin: 50px 0 24px;

  > h2 {
    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: 1px solid ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;
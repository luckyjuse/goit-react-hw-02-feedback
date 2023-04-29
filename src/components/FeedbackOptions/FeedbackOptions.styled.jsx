import styled from '@emotion/styled';

export const ContainerBtnUl = styled.ul`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;

export const FeedbackBtn = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 0.25rem;
  border: 0.0625rem solid gray;
  :hover,
  :focus {
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 255);
  }
`;

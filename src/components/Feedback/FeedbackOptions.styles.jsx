import styled from '@emotion/styled/macro';

export const FeedbackButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-top: 0.5em;
  margin-right: 1em;
  padding: 0.25em 1em;
  font-size: 1em;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background: palevioletred;
    color: white;
  }
`;

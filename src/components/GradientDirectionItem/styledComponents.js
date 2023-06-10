import styled from 'styled-components'

export const Button = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  height: 40px;
  width: 120px;
  margin: 6px;
  opacity: ${props => (props.isMatched ? 1 : 0.5)};
`

import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  text-align: center;
  font-size: 32px;
  font-family: 'roboto';
  color: #ffffff;
`

export const Paragraph = styled.p`
  font-family: 'roboto';
  color: #ededed;
  font-size: 20px;
`

export const UnOrderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
`
export const Label = styled.p`
  color: #ffffff;
`

export const InputStyled = styled.input`
  height: 50px;
  width: 120px;
  background-color: transparent;
  border: none;
  margin-top: 8px;
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  height: 40px;
  width: 120px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #00c9b7;
  border-radius: 8px;
  margin-top: 12px;
`

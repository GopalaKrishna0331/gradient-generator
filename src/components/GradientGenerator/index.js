import {Component} from 'react'

import {
  Container,
  Heading,
  Paragraph,
  UnOrderedList,
  FormContainer,
  InputContainer,
  Button,
  Label,
  InputStyled,
} from './styledComponents'
import ButtonItems from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    hexcode1: '#8ae323',
    hexcode2: '#014f7b',
    gradientValue: `to top, #8ae323, #014f7b`,
  }

  changeGradient = value => {
    this.setState({direction: value})
  }

  onChangeInput1 = event => {
    console.log(event.target.value)
    this.setState({hexcode1: event.target.value})
  }

  onChangeInput2 = event => {
    console.log(event.target.value)
    this.setState({hexcode2: event.target.value})
  }

  onGeneratorGradient = () => {
    const {direction, hexcode1, hexcode2} = this.state
    this.setState({gradientValue: `to ${direction}, ${hexcode1}, ${hexcode2}`})
  }

  render() {
    const {direction, hexcode1, hexcode2, gradientValue} = this.state
    return (
      <Container data-testid="gradientGenerator" gradientValue={gradientValue}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnOrderedList>
          {gradientDirectionsList.map(each => (
            <ButtonItems
              each={each}
              key={each.directionId}
              changeGradient={this.changeGradient}
              direction={direction}
            />
          ))}
        </UnOrderedList>
        <Paragraph>Pick the Colors</Paragraph>
        <FormContainer>
          <InputContainer>
            <Label>{hexcode1}</Label>
            <InputStyled
              type="color"
              id="label1"
              onChange={this.onChangeInput1}
              value={hexcode1}
            />
          </InputContainer>
          <InputContainer>
            <Label>{hexcode2}</Label>
            <InputStyled
              type="color"
              id="label1"
              onChange={this.onChangeInput2}
              value={hexcode2}
            />
          </InputContainer>
        </FormContainer>
        <Button type="button" onClick={this.onGeneratorGradient}>
          Generate
        </Button>
      </Container>
    )
  }
}

export default GradientGenerator

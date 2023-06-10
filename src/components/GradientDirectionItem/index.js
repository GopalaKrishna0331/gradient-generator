import {Button} from './styledComponents'

const ButtonItems = props => {
  const {each, changeGradient, direction} = props
  const {value, displayText} = each
  const onChangeButton = () => {
    changeGradient(value)
  }
  const activate = direction === value
  return (
    <li>
      <Button type="button" onClick={onChangeButton} isMatched={activate}>
        {displayText}
      </Button>
    </li>
  )
}

export default ButtonItems

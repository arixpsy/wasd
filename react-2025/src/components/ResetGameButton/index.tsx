import IconButton from '@/components/IconButton'
import { BsArrowRepeat } from 'react-icons/bs'

type ResetGameButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const ResetGameButton = ({ ...rest }: ResetGameButtonProps) => (
  <IconButton {...rest}>
    <BsArrowRepeat />
  </IconButton>
)

export default ResetGameButton

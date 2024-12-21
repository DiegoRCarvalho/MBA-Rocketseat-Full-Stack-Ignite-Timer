import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'rgb(59, 59, 219)',
  secondary: 'rgb(219, 150, 59)',
  danger:'rgb(219, 59, 59)',
  success: 'rgb(2, 146, 45)'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
`
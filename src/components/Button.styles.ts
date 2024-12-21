import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;
`
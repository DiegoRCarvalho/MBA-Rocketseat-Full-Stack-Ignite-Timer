import styled from 'styled-components'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'success' | 'danger'
}

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;
`
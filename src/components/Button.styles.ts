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

  /* 
    O Styled component ao encontrar uma interpolação dentro de uma string irá executar o código como uma função e ele vai enviar para essa função todas as propriedades do ButtonContainer.
    
    props ---> todas propriedades que vem de <ButtonContainer variant={variant}>Enviar</ButtonContainer> do componente Button.tsx
    background:  ---> é a propriedade do css que queremos alterar.
    buttonVariants ---> objeto que possui os valores possíveis.
    props.variant  ---> acessar apenas a propriedade variant que está dentro de props.
  */
  ${props => {
      return `background: ${buttonVariants[props.variant]}`
    }
  }
`
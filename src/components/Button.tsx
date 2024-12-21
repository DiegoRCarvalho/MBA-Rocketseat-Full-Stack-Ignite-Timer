import styles from './button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' 
}

export function Button({variant = 'primary' }: ButtonProps) {

  return <button className={`${styles.button} ${styles[variant]}`}>Enviar</button>

}
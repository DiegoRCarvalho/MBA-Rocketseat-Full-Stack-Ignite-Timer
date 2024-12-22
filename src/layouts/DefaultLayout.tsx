import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* A função Outlet do React Router é um componente usado para renderizar componentes filhos de rotas aninhadas. Ele atua como um marcador de posição no layout de uma rota pai, indicando onde o conteúdo das rotas filhas será inserido. */}
      <Outlet />
    </div>
  )
}

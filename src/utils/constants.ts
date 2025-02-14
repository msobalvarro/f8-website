// export const SERVER_URL = 'http://localhost:3000'
export const SERVER_URL = 'http://44.204.25.156:3002'

export const routes = [
  { path: '/', name: 'Inicio' },
  { path: '/services', name: 'Servicios' },
  { path: '/products', name: 'Productos' },
  { path: '/about', name: 'Nosotros' },
  { path: '/contact', name: 'Contacto' },
]

export const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
}

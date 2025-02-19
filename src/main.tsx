import 'react-photo-view/dist/react-photo-view.css'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/es'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.locale('es')


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

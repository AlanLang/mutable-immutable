import { createRoot } from 'react-dom/client'
import { App, App1 } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <div>
    <App />
    <App1 />
  </div>
)

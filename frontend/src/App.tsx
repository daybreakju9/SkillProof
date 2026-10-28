import { useEffect, useState } from 'react'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import JobSelectionPage from './pages/jobs/JobSelectionPage'

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    function updatePath() {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  function navigate(next: string) {
    window.history.pushState(null, '', next)
    setPath(next)
  }

  if (path === '/jobs') return <JobSelectionPage navigate={navigate} />
  if (path === '/register') return <RegisterPage navigate={navigate} />
  return <LoginPage navigate={navigate} />
}

export default App

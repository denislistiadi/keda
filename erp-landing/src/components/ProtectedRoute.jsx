import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) return navigate('/login')

  return children
}

export default ProtectedRoute

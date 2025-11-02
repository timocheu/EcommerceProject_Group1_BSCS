import { useNavigate } from 'react-router-dom'

export function useHandleNavigate() {
  const navigate = useNavigate()

  return (path?: string | number) => {
    if (path === -1) {
      navigate(-1) // go back to the previous page
    } else if (typeof path === 'string') {
      navigate(path) // navigate to a specific route
    }
  }
}
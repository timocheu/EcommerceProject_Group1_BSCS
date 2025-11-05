import { useNavigate } from 'react-router-dom'

export function useHandleNavigate() {
  const navigate = useNavigate()

  return (path: string | number, options?: { state?: any; replace?: boolean }) => {
    if (typeof path === 'number') {
      navigate(path)
    } else {
      navigate(path, options ?? {})
    }
  }
}

import { useLocation } from 'react-router'

export const useParams = (): URLSearchParams => {
  const location = useLocation()

  const params = new URLSearchParams(location.search)
  return params
}
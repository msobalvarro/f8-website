import { SERVER_URL } from '@/utils/constants'
import { fetcher } from '@/utils/fetch'
import useSWR from 'swr'

export const useFetch = <T = unknown>(endpoint: string) => {
  const response = useSWR<T>(`${SERVER_URL}${endpoint}`, fetcher)

  return response
}
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { SERVER_URL } from './constants'

export const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
})

export const fetchData = async <T = unknown>(endpoint: string) => {
  try {
    const response = await axiosInstance.get<T>(endpoint)
    return response.data
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.code === 'ERR_NETWORK') {
        toast.error(`Connection refused`)
      } else {
        toast.warning(`${err?.response?.data}`)
      }
    }
  }
}

export const fetcher = async (...args: [RequestInfo, RequestInit?]) => {
  const response = await fetch(...args)
  return response.json()
}

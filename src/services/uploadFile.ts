import { axiosInstance } from '@/utils/fetch'
import { AxiosError } from 'axios'

export const UploadFileService = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  try {
    if (file.type !== 'application/pdf') {
      throw new Error('Por favor selecciona un archivo PDF')
    }

    const response = await axiosInstance.post<{ fileName: string }>('/files/public', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(String(error.response?.data))
    } else {
      throw new Error(String(error))
    }
  }
}
import logo from '@/assets/logo/logo.png'
import phoneCodes from '@/utils/phoneCountries.json'
import { JobApplicationParams, JobsResponse } from '@/utils/interfaces'
import { inputClassNames, InputField } from '../ui/inputField'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useValidation } from '@/hooks/useValidation'
import { v4 } from 'uuid'
import { toast } from 'react-toastify'
import { UploadFileService } from '@/services/uploadFile'
import { axiosInstance } from '@/utils/fetch'
import { AxiosError } from 'axios'

type Props = {
  job: JobsResponse
  onClose: () => void
}

export const ModalApplication = ({ job, onClose }: Props) => {
  const [loading, setLoading] = useState(false)
  const { validateNumber, validateEmail } = useValidation()
  const [file, setFile] = useState<File | null>(null)
  const [phoneCode, setPhoneCode] = useState<string>('+505')
  const [dataForm, setDataForm] = useState<JobApplicationParams>({
    fullName: '',
    email: '',
    phoneNumber: ''
  })

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0]

      if (selectedFile.type !== 'application/pdf') {
        toast.error('Por favor selecciona un archivo PDF')
      } else {
        setFile(selectedFile)
      }
    }
  }

  const submitApplication = async () => {
    setLoading(true)

    // Implementar lógica para enviar
    try {
      if (!validateEmail(dataForm.email)) {
        throw new Error('Correo electrónico inválido')
      }

      if (!validateNumber(dataForm.phoneNumber)) {
        throw new Error('Número telefónico inválido')
      }

      if (!file) {
        throw new Error('Por favor selecciona un archivo PDF')
      }

      if (!dataForm.fullName || dataForm.fullName.split(' ').length < 2) {
        throw new Error('Por favor ingrese su nombre y apellido')
      }

      const imageUploaded = await UploadFileService(file)

      await axiosInstance.post<{ _id: string }>('/jobs/apply', {
        ...dataForm,
        jobId: job._id,
        cv: imageUploaded.fileName
      })

      onClose()

      toast.success('Aplicación enviada correctamente')
    } catch (error) {
      if (error instanceof AxiosError) { 
        toast.error(error.response?.data, {
          position: 'bottom-center'
        })
      } else {
        toast.error(String(error), {
          position: 'bottom-center'
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/[0.4] flex items-center justify-center z-50'>
      <div className='bg-white p-6 fade-in rounded-lg min-w-[300px] md:min-w-[512px] text-black space-y-4'>
        <figure className='text-center space-y-2'>
          <img className='w-[128px] h-auto m-auto' alt='logo' src={logo} />

          <figcaption className='text-xl font-semibold text-[#00143F]'>Aplicar a {job.title}</figcaption>
        </figure>

        <div className='space-y-4 flex flex-col text-[#00143F'>
          <label>
            <span>Nombre Completo *</span>

            <InputField
              className='w-full'
              inputProps={{
                placeholder: 'Nombre Completo',
                value: dataForm.fullName,
                name: 'name',
                onChange: ({ currentTarget }) => setDataForm({
                  ...dataForm,
                  fullName: currentTarget.value
                })
              }} />
          </label>

          <label>
            <span>Correo Electrónico *</span>

            <InputField
              className='w-full'
              inputProps={{
                placeholder: 'Nombre Completo',
                value: dataForm.email,
                type: 'email',
                onChange: ({ currentTarget }) => setDataForm({
                  ...dataForm,
                  email: currentTarget.value
                })
              }} />
          </label>

          <label>
            <span className='text-sm'>Número telefónico *</span>

            <div className='flex gap-2'>
              <select
                onChange={({ currentTarget }) => setPhoneCode(currentTarget.value)}
                value={phoneCode}
                className={inputClassNames}>
                {phoneCodes.map(phoneCodeItem => (
                  <option value={phoneCodeItem.dial_code} key={v4()}>
                    {phoneCodeItem.emoji} ({phoneCodeItem.dial_code})
                  </option>
                ))}
              </select>

              <InputField
                className='flex-1 disabled:bg-color-gray-100'
                inputProps={{
                  required: true,
                  name: 'phone',
                  placeholder: 'Número Telefónico',
                  type: 'tel',
                  value: dataForm.phoneNumber,
                  title: 'Número telefónico deben tener 10 dígitos',
                  onChange: ({ currentTarget }) => validateNumber(currentTarget.value) && setDataForm({ ...dataForm, phoneNumber: currentTarget.value })
                }} />
            </div>
          </label>

          <label className='flex-1'>
            <span className='text-sm'>Subir CV *</span>
            <input
              onChange={handleFileChange}
              className={`${inputClassNames} w-full`}
              type='file'
              accept='.pdf' />
          </label>
        </div>

        <hr />

        <div className='flex justify-between gap-4'>
          <Button onClick={onClose} className='text-[#00143F]'>Cerrar</Button>
          <Button
            disabled={loading}
            variant='contained'
            style={{ backgroundColor: '#00143F' }}
            onClick={submitApplication}>
            Enviar Aplicación
          </Button>
        </div>
      </div>
    </div>
  )
}
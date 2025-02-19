import logo from '@/assets/logo/logo.png'
import phoneCodes from '@/utils/phoneCountries.json'
import { JobApplicationParams, JobsResponse } from '@/utils/interfaces'
import { inputClassNames, InputField } from '../ui/inputField'
import { useState } from 'react'
import { Button } from '@mui/material'
import { useValidation } from '@/hooks/useValidation'
import { v4 } from 'uuid'

type Props = {
  job: JobsResponse
  onClose: () => void
}

export const ModalApplication = ({ job, onClose }: Props) => {
  const { validateNumber } = useValidation()
  const [phoneCode, setPhoneCode] = useState<string>('+505')
  const [dataForm, setDataForm] = useState<JobApplicationParams>({
    fullName: '',
    email: '',
    phoneNumber: ''
  })

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/[0.4] flex items-center justify-center z-50'>
      <div className='bg-white p-6 fade-in rounded-lg min-w-[300px] md:min-w-[512px] text-black space-y-4'>
        <figure className='text-center space-y-2'>
          <img className='w-[128px] h-auto m-auto' alt='logo' src={logo} />

          <figcaption className='text-xl font-semibold'>Aplicar a {job.title}</figcaption>
        </figure>

        <div className='space-y-4 flex flex-col text-[#00143F'>
          <label>
            <span>Nombre Completo *</span>
            <InputField
              className='w-full'
              inputProps={{
                placeholder: 'Nombre Completo',
                value: dataForm.fullName,
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
            <input type='file' className={`${inputClassNames} w-full`} accept={'application/pdf'} />
          </label>
        </div>

        <div className='flex justify-center gap-4'>
          <Button onClick={onClose}>Cerrar</Button>
          <Button variant='contained'>Enviar Aplicación</Button>
        </div>
      </div>
    </div>
  )
}
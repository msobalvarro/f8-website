
import phoneCodes from '@/utils/phoneCountries.json'
import { FormEvent, useState } from 'react'
import { inputClassNames, InputField } from '@/components/ui/inputField'
import { FormContactState } from '@/utils/interfaces'
import { useValidation } from '@/hooks/useValidation'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { axiosInstance } from '@/utils/fetch'
import { useParams } from '@/hooks/useParams'
import { v4 } from 'uuid'

const initialState: FormContactState = {
  email: '',
  company: '',
  fullName: '',
  message: '',
  phoneNumber: '',
}

export const ContactForm = () => {
  const params = useParams()
  const customMessageProduct = params?.get('product')
  const { validateNumber } = useValidation()
  const [loading, setLoading] = useState(false)
  const [phoneCode, setPhoneCode] = useState<string>('+505')
  const [dataForm, setDataForm] = useState<FormContactState>({
    ...initialState,
    ...(customMessageProduct && {
      message: `Me gustaria cotizar del producto ${customMessageProduct}`
    })
  })

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    try {
      await axiosInstance.post('/message', dataForm)
      toast.success('El mensaje ha sido enviado correctamente.')
      setDataForm(initialState)
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(String(error.response?.data))
      } else {
        toast.error(String(error))
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className='flex flex-col gap-4'>
      <div className='flex md:flex-row flex-col gap-4'>
        <label className='flex-1'>
          <span className='text-sm'>Nombre Completo *</span>
          <InputField
            className='w-full'
            inputProps={{
              required: true,
              name: 'fullName',
              placeholder: 'Nombre Completo',
              value: dataForm.fullName,
              onChange: ({ currentTarget }) => setDataForm({
                ...dataForm,
                fullName: currentTarget.value
              })
            }} />
        </label>

        <label className='flex-1'>
          <span className='text-sm'>Nombre Empresa *</span>
          <InputField
            className='w-full'
            inputProps={{
              name: 'companyName',
              placeholder: 'Nombre Empresa',
              value: dataForm.company,
              onChange: ({ currentTarget }) => setDataForm({
                ...dataForm,
                company: currentTarget.value
              })
            }} />
        </label>
      </div>

      <div className='flex md:flex-row flex-col gap-4'>
        <label className='flex-1'>
          <span className='text-sm'>Correo Electrónico *</span>
          <InputField
            className='w-full'
            inputProps={{
              required: true,
              name: 'email',
              placeholder: 'Correo Electrónico',
              value: dataForm.email,
              onChange: ({ currentTarget }) => setDataForm({
                ...dataForm,
                email: currentTarget.value
              })
            }} />
        </label>

        <label className='flex-1'>
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

      </div>

      <label>
        <span className='text-sm'>Mensaje *</span>
        <textarea
          required
          value={dataForm.message}
          onChange={({ currentTarget }) => setDataForm({ ...dataForm, message: currentTarget.value })}
          rows={6}
          placeholder='Escriba un Mensaje, indique su cotizacion o duda'
          className={`w-full ${inputClassNames}`} />
      </label>

      <button
        className={`transition-all  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2': type === 'secondary`}>
        {loading ? 'Cargando...' : 'Enviar Mensaje'}
      </button>

    </form>
  )
}
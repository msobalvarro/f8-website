export interface FormContactState {
  company: string
  fullName: string
  email: string
  phoneNumber: string
  message: string
}

export interface ProductsPropierties {
  _id: string
  name: string
  description: string
  archived: boolean
  images: string[]
  pinned: boolean
}

export interface DeleteProductProps {
  id: string
}

export type UpdateProductProps = DeleteProductProps & ProductsPropierties

export interface UsersPropierties {
  name: string
  username: string
  password: string
}

export interface LoginProps {
  username: string
  password: string
}

export interface PropsUseAxios {
  endpoint: string
}

export interface PreferencesProps {
  emailContact: string
  phoneContact: string
  whatsapp: string
}

export interface PreferencesPropierties {
  key: string
  value: string
}

export interface DeletePreferencesProp {
  _id: string
}

export interface UpdatePreferencesProp extends PreferencesPropierties {
  _id: string
}

export interface MessagesPropierties {
  fullName: string
  company: string
  email: string
  phoneNumber: string
  message: string
  archived: boolean
}

export interface ArchiveMessageProp {
  _id: string
}

export interface ServicesPropierties {
  title: string
  description: string
  images: string[]
  archived?: boolean
  pinned?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface NewAndUpdateServiceProps extends ServicesPropierties {
  id: string
}

export interface ServiceResponse extends ServicesPropierties {
  _id: string
}

export type PreferencePropsType = {
  propierties: PreferencesPropierties[]
  setPropierties: (props: PreferencesPropierties[]) => void
}

export type ProductsPropsType = {
  products: ProductsPropierties[]
  setProducts: (props: ProductsPropierties[]) => void
}

export type ServicesPropsType = {
  services: ServiceResponse[]
  setServices: (props: ServiceResponse[]) => void
}

export type MenuProps = {
  path: string
  name: string
  subMenu?: MenuProps[]
}

export type JobsResponse = {
  _id: string
  title: string
  location: string
  description: string
  image?: string | null
  tags: string[]
  active: boolean
  createdAt: string
  updatedAt: string
}

export type JobApplicationParams = {
  fullName: string
  email: string
  phoneNumber: string
}

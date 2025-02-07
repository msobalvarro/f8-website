import { create } from 'zustand'
import { PreferencePropsType, PreferencesPropierties, ProductsPropierties, ProductsPropsType, ServiceResponse, ServicesPropsType } from './interfaces'


export const useStorePropierties = create<PreferencePropsType>((set) => ({
  propierties: [],
  setPropierties: (propierties: PreferencesPropierties[]) => set(() => ({ propierties })),
}))

export const useProductsPropierties = create<ProductsPropsType>((set) => ({
  products: [],
  setProducts: (products: ProductsPropierties[]) => set(() => ({ products })),
}))

export const useServicesPropierties = create<ServicesPropsType>((set) => ({
  services: [],
  setServices: (services: ServiceResponse[]) => set(() => ({ services })),
}))
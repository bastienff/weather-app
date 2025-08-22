import { MENU_CITIES, MenuCityType } from '@/lib/contants'
import { create } from 'zustand'

export type StoreStateType = {
  selectedCity: MenuCityType;
  weatherData: any,
  setSelectedCity: (city: MenuCityType) => void;
}

export const useStore = create<StoreStateType>((set) => ({
  selectedCity: MENU_CITIES[0],
  weatherData: {},
  setSelectedCity: (city: MenuCityType) => set({ selectedCity: city }),
  setWeatherData: (data: any) => set({ weatherData: data }),
}))

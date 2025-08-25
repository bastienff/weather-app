import { MENU_CITIES } from '@/lib/contants'
import { MenuCity } from '@/lib/store.types';
import { create } from 'zustand'

export type StoreStateType = {
  selectedCity: MenuCity;
  weatherData: any,
  weatherLatestUpdate: string | null,
  setSelectedCity: (city: MenuCity) => void;
  setWeatherLatestUpdate: (date: string) => void;
}

export const useStore = create<StoreStateType>((set) => ({
  selectedCity: MENU_CITIES[0],
  weatherData: {},
  weatherLatestUpdate: null,
  setSelectedCity: (city: MenuCity) => set({ selectedCity: city }),
  setWeatherLatestUpdate: (date: string) => set({ weatherLatestUpdate: date }),
}))

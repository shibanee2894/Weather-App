import { create } from 'zustand';


interface WeatherData {
    city: string;
    temperature: number;
    description: string;
}

interface WeatherState {
    weather: WeatherData | null;
    setWeather: (data: WeatherData) => void;
}

const useStore = create<WeatherState>((set) => ({

    weather: null,
    setWeather: (data: WeatherData) => set({ weather: data}),

}));
  


export default useStore;

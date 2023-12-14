import { create } from 'zustand';


type StoreStatesAndActions = {
  openNavMenu: boolean;
  setOpenNavMenu: (open: boolean) => void;
}

const useGlobalStore = create<StoreStatesAndActions>()((
  set
) => ({
  openNavMenu: false,
  setOpenNavMenu: (open: boolean) => set({openNavMenu: open})
}))

export default useGlobalStore;
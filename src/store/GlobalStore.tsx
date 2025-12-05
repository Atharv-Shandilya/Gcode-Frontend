import { create } from "zustand";

interface GlobalStoreI {
  page: number;
  setPage: (pageNo: number) => void;

  showProfile: boolean;
  setShowProfile: () => void;

  showBooking: boolean;
  setShowBooking: () => void;

  bookingDateSelected: {
    date: number;
    monthIndex: number;
    year: number;
  } | null;
  setBookingDate: (date: number, monthIndex: number, year: number) => void;

  bookingFormStep: number;
  bookingMoveTo: (step: number) => void;

  slotSelected: number | null;
  setSelectedSlot: (slot: number) => void;
}

export default create<GlobalStoreI>()((set, get) => ({
  page: 1,
  setPage: (pageNo) => {
    set((state) => ({ ...state, page: pageNo }));
  },
  showProfile: false,
  setShowProfile: () => {
    set((state) => ({ ...state, showProfile: !state.showProfile }));
  },
  showBooking: false,
  setShowBooking: () => {
    set((state) => {
      if (get().showBooking == true) {
        return {
          ...state,
          showBooking: false,
          bookingDateSelected: null,
          slotSelected: null,
          bookingFormStep: 1,
        };
      }
      return { ...state, showBooking: true };
    });
  },

  bookingDateSelected: null,
  setBookingDate: (date, monthIndex, year) => {
    set((state) => ({
      ...state,
      slotSelected: null,
      bookingDateSelected: { date, monthIndex, year },
    }));
  },
  bookingFormStep: 1,
  bookingMoveTo: (step) => {
    set((state) => ({ ...state, bookingFormStep: step }));
  },

  slotSelected: null,
  setSelectedSlot: (slot) => {
    set((state) => ({ ...state, slotSelected: slot }));
  },
}));

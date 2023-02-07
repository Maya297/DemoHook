import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const reducSlice = createSlice({
  name: 'initialState',
  initialState: initialState,
  reducers: {
    addHandler(state,action) {
        const data = [...state.data];
        data.push(action.payload);
        return {
           ...state,
            data,
        };
    },
    updateHandler(state,action) {
      const index = state.data.findIndex(x => x.id === action.payload.id);
        const data = [...state.data];
        data[index] = action.payload.allData;
        return {
          ...state,
            data,
        };
    },
    deleteHandler(state,action) {
        const data = [...state.data];
        data.splice(action.payload,1);
        return {
          ...state,
            data,
        }
    }
  },
});

export const reduxAction = reducSlice.actions;

export default reducSlice.reducer;
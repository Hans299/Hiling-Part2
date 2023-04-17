import { createSlice } from '@reduxjs/toolkit'

const developerInit = {
    name: "Hans Bonatua Batuabara",
    nim: 120140131,
}

export const developer = createSlice({
    name: "developer",
    initialState: {...developerInit},
    reducers: {
        //
    }
})

export default developer.reducer;
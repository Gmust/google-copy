import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface userSlice {
    loginInputValue: string;
}

const initialState = {
    loginInputValue: '',
}


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        saveInputValue(state, action: PayloadAction<string>){
            state.loginInputValue += action.payload
        }

    }
});


export const {saveInputValue} = loginSlice.actions;
export default loginSlice.reducer;
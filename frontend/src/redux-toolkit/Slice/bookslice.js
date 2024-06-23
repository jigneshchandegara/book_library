import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../API-URL";

const initialState = {
    book: [],
    isLoading: false,
    isError: false
};

// API call
//POST DATA
export const postData = createAsyncThunk(
    "postData",
    async (data, { rejectWithValue }) => {
        let { endpoint, payload, dataType } = data;
        // console.log(payload, "payload");
        try {
            let res = await axios.post(BASE_URL + endpoint, payload);
            console.log(res.data, "res.data");
            return { data: res.data, dataType }
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

//GET DATA
export const getdata = createAsyncThunk(
    "getdata",
    async ({ endpoint, dataType }, { rejectWithValue }) => {
        try {
            const res = await axios.get(BASE_URL + endpoint);
            console.log(res.data.data, "res.data");
            return { data: res.data.data, dataType };
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message)
        }
    }
)

// Slice
export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            //post meth
            .addCase(postData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(postData.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            })
            .addCase(postData.fulfilled, (state, action) => {
                state.isLoading = false;
                const { dataType, data } = action.payload;
                switch (dataType) {
                    case "book": state.book = state.book.concat(data.data);
                        break;
                    default:
                        break;
                }
            })

            //get meth
            .addCase(getdata.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getdata.rejected, (state, action) => {
                state.isError = action.payload;
                state.isLoading = false;
            })
            .addCase(getdata.fulfilled, (state, action) => {
                state.isLoading = false;
                const { data, dataType } = action.payload;
                switch (dataType) {
                    case "book": state.book = data;
                        break;
                    default:
                        break;
                }

            })
    }
})

export default bookSlice.reducer;
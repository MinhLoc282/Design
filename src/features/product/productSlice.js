import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
    error: null,
    products: []
}

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (data, { rejectWithValue }) => {
        const response = await fetch('http://localhost:4000/product',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const jsonData = await response.json()
        if (response.status !== 200 || response.status >= 300) {
            return rejectWithValue(jsonData)
        }
        return jsonData
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products.push(action.payload)
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload.message
        })
    }
})

export const selectAllProducts = (state) => state.product.products
export const selectProductById = (state, productId) =>
    state.product.products.find(product => product.id === productId)

export default productSlice.reducer;
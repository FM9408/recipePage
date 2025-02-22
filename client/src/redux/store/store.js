import mainSlice from "../slices/index.js"
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer: mainSlice
})

export default store


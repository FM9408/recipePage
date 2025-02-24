import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


export const fetchAllRecipes = createAsyncThunk(
    'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    try {
        
    const response = await axios.get("/recipes/all")

      return response.data
      
    } catch (error) {
        throw new Error(error)
    }
  },
)

export const queryRecipes = createAsyncThunk(
    'recipes/fetchingBySearchingText',
  async (searchingText, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/search?serchingText=${searchingText}`)
      
    return response.data
    } catch (error) {
        throw new Error(error)
    }
  },
)
export const queryRecipesbyTag = createAsyncThunk(
    'recipes/fetchingByTag',
  async (tagName, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/searchByTag?tagName=${tagName}`)
    return response.data
    } catch (error) {
        throw new Error(error)
    }
  },
)
export const queryAllTags = createAsyncThunk(
    'recipes/fetchingAllTags',
  async (tagName, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/getTags`)
    return response.data
    } catch (error) {
        throw new Error(error)
    }
  },
)


const mainSlice = createSlice({
    name:"mainSlice",
    initialState: {
      recipes: [],
      tags: [],
      selectedTag: "",
        showingRecipe: {},
        loadingInfo: "idle"
    },
    reducers: {
      selectTag(state, action){
        state.selectedTag = action.payload    
      }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllRecipes.fulfilled, (state, action) => {
            state.recipes = action.payload
        })
      builder.addCase(queryRecipes.fulfilled, (state, action) => {
          state.recipes = action.payload
        })
      builder.addCase(queryRecipesbyTag.fulfilled, (state, action) => {
          state.recipes = action.payload
        })
      builder.addCase(queryAllTags.fulfilled, (state, action) => {
          state.tags = action.payload
        })
    } 

    

})

export const {selectTag} = mainSlice.actions
export default mainSlice.reducer
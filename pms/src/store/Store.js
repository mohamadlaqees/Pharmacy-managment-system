import {configureStore} from '@reduxjs/toolkit'
import ChartReducer from './ChartSlice'
const store=configureStore(
    {
        reducer:{
            chart:ChartReducer
        }
    }
)
export default store
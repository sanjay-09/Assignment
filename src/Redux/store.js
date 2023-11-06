import {configureStore} from "@reduxjs/toolkit"

import appSlice from "./appSlice"

const appStore=configureStore({
    reducer:{
        appSlice
       
    }

})
export default appStore;
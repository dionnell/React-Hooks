import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainApp } from './09-useContext/'

import './index.css'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterCustomHook } from './01-useState/CounterCustomHook'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { FormCustomHook } from './02-useEffect/FormCustomHook'
//import { MultipleCustomHooks } from './03-Expamples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLyoutEffect/Layout'
//import { Memorize } from './06-memos/Memorize'
//import { MemoHook } from './06-memos/MemoHook'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/Padre'

//import './08-useReducer/intro-reducer'
//import { TodoApp } from './08-useReducer/TodoApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode> 
      <MainApp />
    </React.StrictMode> ,
  </BrowserRouter>
)

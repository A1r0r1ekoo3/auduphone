import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { store } from './store/store'
import { Provider } from 'react-redux'
import "./firebase"

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
        {/* <ToastContainer position='top-right' /> */}
    </Provider>
)

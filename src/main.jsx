import React from 'react'
import ReactDOM from 'react-dom/client'
import {TodoApp} from './components/TodoApp.jsx'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TodoApp/>
    </React.StrictMode>,
)

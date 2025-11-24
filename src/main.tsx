import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ConfigProvider} from "antd";  
import "antd/dist/reset.css";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={{
      token:{
        fontSize:16
      },
      components:{
        Layout:{
          headerBg:"none",
          footerBg:"none"
        },
        Button: {
          colorPrimary: "var(--secondary-color)",
          colorPrimaryHover: "#d27a32",   // hover text/icon color
          defaultHoverBorderColor: "var(--secondary-color)",
        }
      }
    }}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
 
import React from 'react'
import { MicroApp } from './components/MicroApp'
import { Home } from './pages/Home'
import { ConfigProvider } from 'antd5'

function App() {
  return (
    <ConfigProvider prefixCls="ant5">
      <Home />
      <MicroApp />
    </ConfigProvider>
  )
}

export default App

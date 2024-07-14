import React from 'react'
import { Spin } from 'antd'

export default function LoadingSpin({ loading }) {

  return (
    <Spin spinning={loading} fullscreen></Spin>
  )
}

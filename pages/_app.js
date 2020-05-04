import App from 'next/app'
import React from 'react'
import '../styles.css'
import '../bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
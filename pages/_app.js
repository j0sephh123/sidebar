import App from "next/app";
import { Provider } from "react-redux";
import withRedux, { createWrapper } from "next-redux-wrapper";
import React from "react";
import "../styles.css";
import "../bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import { ThemeProvider } from "styled-components";
import store from "../src/redux/store";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // console.log(ctx);

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    // console.log(pageProps)

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
//makeStore function that returns a new store for every request
const makeStore = () => store;

const wrapper = createWrapper(makeStore, {debug: true})

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp)
import React from 'react'
import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../store'

// Import scss files
import '../styles/_app.scss'

export default withRedux(makeStore, { debug: false })(
  class PublicApp extends App {
    constructor(props, context) {
      super(props, context)
    }

    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      }
    }

    render() {
      const { Component, pageProps, store } = this.props
      return (
        <div>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </div>
      )
    }
  }
)

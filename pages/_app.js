import React from 'react'
import BaseApp from 'next/app'
import client from '../client'
import '../styles/shared.module.css'
import '../styles/layout.css'
import '../styles/custom-properties.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css' //importing font awesome css
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `

class App extends BaseApp {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Add site config from sanity
    return client.fetch(siteConfigQuery).then((config) => {
      if (!config) {
        return {pageProps}
      }
      if (config && pageProps) {
        pageProps.config = config
      }

      return {pageProps}
    })
  }

  render() {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}

export default App

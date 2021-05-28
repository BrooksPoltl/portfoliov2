import React from "react"
import Header from "./header"
import { rhythm } from "../utils/typography"
import config from '../data/siteConfig'

const Layout = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header menuLinks={config.menuLinks} />
      <main id = "main-content">{children}</main>
    </div>
  )
}

export default Layout

import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import React from "react"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          Get Start
        </Link>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A fully responsive UI Library for React, Vue 3 and Svelte."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}

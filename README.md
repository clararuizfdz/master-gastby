# 00-start
```bash
npm install
npm install gatsby --save

npm i gatsby-plugin-typescript gatsby-plugin-alias-imports gatsby-plugin-web-font-loader gatsby-plugin-manifest babel-preset-gatsby babel-plugin-emotion -D
```

```
Plugins of gatsby: https://www.gatsbyjs.org/plugins/
Gatsby tiene su propio enrutador, no necesitamos React.Router

To modify HTML header: https://github.com/nfl/react-helmet
```bash
npm i react-helmet -P
npm i @types/react-helmet gatsby-plugin-react-helmet -D
```
Library to load images: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image

```bash
npm i gatsby-image -P
npm i gatsby-transformer-sharp gatsby-plugin-sharp gatsby-source-filesystem -D
```
Query to search for image:
```
query {
  homeLogo: file(relativePath: {eq: "home-logo.png"}) {
    childImageSharp {
      fixed {
        base64
        originalName
      }
    }
  }
}
```

Load posts of the blog
```bash
npm i gatsby-transformer-remark -D
```

Query to retrieve all posts: 
```
query {
  postListQuery: allMarkdownRemark {
    nodes {
      frontmatter {
        title
        path
      }
    }
  }
}
```

Create pages dinamically: https://www.gatsbyjs.org/docs/node-apis/#createPages

Para consumir contenful
```bash
npm i gatsby-source-contentful gatsby-remark-images-contentful -D
```
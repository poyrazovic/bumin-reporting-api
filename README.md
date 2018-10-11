## Bumin Reporting API

### Initialization

```
$ npm install -g local-cors-proxy
```

`yarn` or `yarn install`

If the Yarn package isn't install:
`npm i -g yarn`

### Development

```
// .env file
NODE_ENV=development
REACT_APP_DEVELOPMENT_API=http://localhost:8010/proxy
```

**at separate terminals**

```
$ yarn start-proxy
```

```
$ yarn start
```

```
$ yarn watch-css
```

### Production
If the Serve (yarn package) isn't install:
`$ yarn global add serve `

```
$ yarn build
$ serve -s build
```

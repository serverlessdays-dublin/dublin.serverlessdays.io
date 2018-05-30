# dublin.serverlessdays.io

[![CircleCI](https://circleci.com/gh/serverlessdays-dublin/dublin.serverlessdays.io.svg?style=shield)](https://circleci.com/gh/serverlessdays-dublin/dublin.serverlessdays.io)

Website for ServerlessDays Dublin


## Currently work in progress

This website is currently in highly development, so don't play too much with it just now, or at least, keep on hold your expectations... 😅


## Commands for build and deployment

This website is currently built using [GatsbyJs](https://www.gatsbyjs.org).
The build process will create a static website (only HTML, CSS and JS files) that can be easily hosted.

### Development

In order to start the development environment you can run `npm devel` (or `npm development` if you like longer commands). This will bootstrap a live-reloading development web server on port [`8000`](http://localhost:8000/).


## Production Build

In case you want to see how a production build looks like (which you don't really have to do, unless you are curious, because the CI will do that for you), you can run `npm run build`. This command will emit the static version of the website in the `public` folder.

If you want to run this on a local webserver you can run `npm start`, which will show the last build on port [`9000`](http://localhost:9000/).


## Website publishing

The website is auto-magically™️ built and published every time there's a push on the Master branch.

If you are curious to know how this works, you can have a look at our [CircleCI config](/.circleci/config.yml).

Website is published on GitHub pages from the branch [`gh-pages`](https://github.com/serverlessdays-dublin/dublin.serverlessdays.io/tree/gh-pages) using the command line utility [`gh-pages`](http://npm.im/gh-pages).


## That's all folks

```
ヽ(o＾▽＾o)ノ
```

# comment-sys

- Navigate into folder and run `npm install`
- Run `npm run serve` to start the server
- Open your browser to [localhost:8080](http://localhost:8080)
- The App includes two components `App.vue` and `Comment.vue`
- The App includes a data folder which contains the comment data in `components/data/comment.js`
- On start, the App component pulls the data from the `comment.js` file and populates the `commentDetails` array
- This array is then passed down as a `prop` to the `Comment.vue` component
- The `Comment.vue` component has methods like `increaseLikes` to increase the like data counter, `decreaseLikes` to decrease the dislike 	  data counter, `hoverIn` to change the color of the interactives and `hoverOut` to get the normal color state of the interactives
- Font awesome library was used for the upwards caret and downward caret
- The app contains unit test cases in `test/unit - app.spec.js and comment.spec.js`
 
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

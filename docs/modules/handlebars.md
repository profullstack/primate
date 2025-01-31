# Handlebars

This handler module serves Handlebars components with the `.hbs` extension.

## Install

`npm install @primate/frontend handlebars@4`

## Configure

Import and initialize the module in your configuration.

```js caption=primate.config.js
import { handlebars } from "@primate/frontend";

export default {
  modules: [
    handlebars(),
  ],
};
```

## Use

Create a Handlebars component in `components`.

```html caption=components/post-index.hbs
<h1>All posts</h1>
<div>
{{#each posts}}
<h2><a href="`/post/{{this.id}}">{{this.title}}</a></h2>
{{/each}}
</div>
```

Create a route and serve the Handlebars `PostIndex` component.

```js caption=routes/hbs.js
import { view } from "primate";

const posts = [{
  id: 1,
  title: "First post",
}];

export default {
  get() {
    return view("post-index.hbs", { posts });
  },
};
```

Your rendered Handlebars component will be accessible at
http://localhost:6161/hbs.

## Configuration options

### directory

Default `config.location.components`

Directory where the Handlebars components reside.

### extension

Default `".hbs"`

The file extension associated with Handlebars components.

## Resources

* [Repository][repo]

[repo]: https://github.com/primatejs/primate/tree/master/packages/frontend

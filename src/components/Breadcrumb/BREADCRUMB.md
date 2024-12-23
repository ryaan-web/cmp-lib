# Breadcrump :zap:

Breadcrumbs.

```meta
  category: Navigation
  description: A breadcrumb or breadcrumb trail is a graphical control element frequently used as a navigational aid in user interfaces and on web pages. It allows users to keep track and maintain awareness of their locations within websites.
```

```js
import Breadcrumb from "sushiweb/Breadcrumb";
```

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

<!-- STORY HIDE START -->

The content here won't be shown in stories.

<!-- STORY HIDE END -->

## Examples

### Basic Breadcrumb

```js
import Breadcrumb from "sushiweb/Breadcrumb";
....
render() {
  return (
    <Breadcrumb>
              <Breadcrumb.Link linkTo="/home">home</Breadcrumb.Link>
              <Breadcrumb.Link linkTo="/ncr">ncr</Breadcrumb.Link>
              <Breadcrumb.Link linkTo="/res">beer cafe</Breadcrumb.Link>
      </Breadcrumb>
  ));
```

### Single Breadcrumb

```js
import Breadcrumb from "sushiweb/Breadcrumb";
....
render() {
  return (
    <Breadcrumb>
              <Breadcrumb.Link linkTo="/home">home</Breadcrumb.Link>
      </Breadcrumb>
  ));
```

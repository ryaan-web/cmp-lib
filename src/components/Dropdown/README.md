# Dropdown

```js
import Dropdown from "sushiweb/Dropdown";
```

<!-- STORY -->

<!-- PROPS -->

## Example

### Basic dropdown

```js
<Dropdown leftIcon="locationFill" value="Kolkata" onSelect={handleSelect}>
  <MenuItem value="newdelhi" leftIcon="location" label="New Delhi" />
  <MenuItem value="kolkata" leftIcon="location" label="Kolkata" />
  <MenuItem
    value="thiruvananthapuram"
    leftIcon="location"
    label="Thiruvananthapuram"
  />
  <MenuItem value="bangalore" leftIcon="location" label="Bangalore" />
</Dropdown>;

const handleSelect = value => {
  // callback function for selecting an item from the dropdown
};
```

#### Props

`leftIcon: string` this prop defines the icon to be shown in the left. By default it doesn't show any icon.

`rightIcon: string` this prop defines the icon to be shown in the right. By default it is `down-triangle`. It animates and rotates 180 degree when the list opens.

`value: string` this prop defines the default value selected in the dropdown.

`onSelect: func` this prop takes a function as a callback and it is triggered when a user selects any item from the dropdown.

`placeholder: string` this prop defines the placeholder to be shown in the left. By default it doesn't show any placeholder.
#### Additional Props

`width: string` overrides default width of the dropdown.

```js
<Dropdown width="250px"> ... </Dropdown>
```

`borderColor: string` overrides default border color.

```js
<Dropdown borderColor="#000"> ... </Dropdown>
```

`helperText: string` It shows any helper text at the bottom of the dropdown.

```js
<Dropdown helperText="Please choose a location"> ... </Dropdown>
```

`errorText: string` It changes the state of the dropdown to error and shows error text at the botoom.

```js
<Dropdown errorText="Location is not valid"> ... </Dropdown>
```

Note: `errorText` overrides `helperText`;

`showArrow: bool` set if arrow should be shown in the dropdown list. By default it is set as `false`.

```js
<Dropdown showArrow={true}> ... </Dropdown>
```

`staticHeader: node` Set if you want to show a static header on dropdown which won't change on changing the value of dropdown.

```js
<Dropdown staticHeader={<div>Static Header</div>}> ... </Dropdown>
```
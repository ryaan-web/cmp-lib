# Dialog

Dialog component here is the modified version of Modal component. The Dialog is used when a decision is required from the user.
Dialog is dismissable only with action button clicks.

## Import

```js
import Dialog from "sushiweb/Dialog";
```

<!-- STORY -->

## Example

```js
import Dialog from "sushiweb/Dialog";
import Button from "sushiweb/Button";

<Button appearance="outline" onClick={handleClick}>
  Open Dialog
</Button>
<Dialog
  visible={isVisible}
  acceptLabel="Yes"
  rejectLabel="No"
  onAccept={handleAccept}
  onReject={handleReject}
>
  <p>Do you love our ui kit?</p>
</Dialog>

const handleAccept = () => {
  // close the dialog
  // handle accept click
}

const handleReject = () => {
  // close the dialog
  // handle reject click
}
```

#### Props

`visible: bool` this prop sets the visibility state of the modal.

`onAccept: func` Callback function, triggered when user clicks the accept button.

`onReject: func` Callback function, triggered when user clicks the reject button.

`acceptLabel: string` Label to be displayed on accept button.

`rejectLabel: string` Label to be displayed on reject button.

`onClose: func` Callback function, triggered when user clicks outside the dialog (onBlur event).

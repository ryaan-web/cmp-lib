import {Modal} from "./Modal";
import PropTypes from "prop-types";
import _noop from "lodash-es/noop";

const Dialog = (props) => {
  const {
    onAccept = _noop,
    onReject = _noop,
    rejectLabel = "",
    acceptLabel = "",
    type = "medium",
  } = props;
  return (
    <Modal
      {...props}
      isDialog={true}
      type={type}
      onAccept={onAccept}
      onReject={onReject}
      rejectLabel={rejectLabel}
      acceptLabel={acceptLabel}
    />
  );
};

Dialog.propTypes = {
  onAccept: PropTypes.func,
  onReject: PropTypes.func,
  rejectLabel: PropTypes.string,
  acceptLabel: PropTypes.string,
  type: PropTypes.string,
};

export {Dialog};

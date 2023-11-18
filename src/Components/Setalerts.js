import React from "react";

export function Alerts(props) {
if(props.alert===null){
  return null;
}
  return (
    <>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type} </strong>{props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

Alerts.defaultProps = {
  message: "Holy guacamole!",
};

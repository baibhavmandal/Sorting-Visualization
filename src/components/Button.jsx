import React from "react";

export const CommonButton = ({label, onClick, type = "button", isDisabled=false}) => {
return (<button className="m-2 p-2 bg-federal-blue border border-marian-blue rounded text-light-cyan" onClick={onClick} type={type} disabled={isDisabled}>{label}</button>);
}
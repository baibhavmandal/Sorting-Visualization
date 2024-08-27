import React from "react";

export const CommonButton = ({label, onClick, type = "button"}) => {
return (<button className="m-2 p-2 bg-federal-blue border border-marian-blue rounded text-light-cyan" onClick={onClick} type={type}>{label}</button>);
}
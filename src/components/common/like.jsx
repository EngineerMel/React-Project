import React, { Component } from "react";

const Like = () => {
  let classes = "fa fa-heart";
  if (!this.props.liked) classes += "-o";
  return (
    <i
      onClick={this.props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;

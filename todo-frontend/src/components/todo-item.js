import React from "react";

export default function(props) {
  // Data that will be needed which will be content
  // _id
  // content

  const { _id, content } = props.item;
  return (
    <div>
      <div>{content}</div>
    </div>
  );
}

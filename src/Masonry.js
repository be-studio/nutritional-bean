import React from "react";
import PropTypes from "prop-types";

Masonry.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
};

Masonry.defaultProps = {
  columns: 2,
  gap: 20,
};


export function Masonry(props) {
  const columnWrapper = {};
  const result = [];

  for(let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  props.children.forEach((child, index) => {
    const columnIndex = index % props.columns;
    columnWrapper[`column${columnIndex}`].push(
      <div key={index} style={{ marginBottom: `${props.gap}px`}}>
        {child}
      </div>
    );
  });

  for(let i = 0; i < props.columns; i++) {
    result.push(
      <div key={i} style={{ marginLeft: `${i > 0 ? props.gap : 0}px`, flex: 1 }}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {result}
    </div>
  );
}

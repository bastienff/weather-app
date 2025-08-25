import React from 'react'
import { ListChildComponentProps } from 'react-window';

export const Row = (props: ListChildComponentProps) => {
  const { data, index, style } = props;
  const city = data[index];
  return (
    <div style={style}>
      {city}
    </div>
  );
}

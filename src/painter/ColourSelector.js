import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { classname,label,background } = config;
  return (
    <button className={classname} onClick={() => selectNextBackground({background: background})}>
        {label}
    </button>
  )
}
export default ColourSelector;
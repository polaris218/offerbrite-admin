import React from 'react';

import { makeTimeFromSeconds } from 'services/helpers';

const ChartTooltipWithTime = props => {
  const { active } = props;

  if (active) {
    const { payload } = props;
    return (
      <div>
        <p>{`duration: ${makeTimeFromSeconds(parseInt(payload[0].value))}`}</p>
      </div>
    );
  }

  return null;
};

export default ChartTooltipWithTime;

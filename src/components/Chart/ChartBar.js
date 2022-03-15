import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  /*TODO chartBar이 0%임  string으로 바꿈 아래 % 넣기위해서*/
  let barFillHeight = '0%';

  /* TODO bar이 채워졌을 때 0~100까지 퍼센트 */
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          /* How much this chartbar will be filled */
          /* TODO style= {{key: value } prop 추가해줌 */
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;

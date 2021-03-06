import React from "react";
import styled from "styled-components";
const Outerdiv = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background: linear-gradient(to right, #e96443, #904e95);
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  width: 40px;
  height: 40px;
  --c: linear-gradient(currentColor 0 0);
  --r1: radial-gradient(farthest-side at bottom, currentColor 93%, #0000);
  --r2: radial-gradient(farthest-side at top, currentColor 93%, #0000);
  background: var(--c), var(--r1), var(--r2), var(--c), var(--r1), var(--r2),
    var(--c), var(--r1), var(--r2);
  background-repeat: no-repeat;
  animation: db1 1s infinite alternate;

  @keyframes db1 {
    0%,
    10% {
      background-size: 8px 0, 8px 4px, 8px 4px;
      background-position: 0 50%, 0 calc(50% - 2px), 0 calc(50% + 2px), 50% 50%,
        50% calc(50% - 2px), 50% calc(50% + 2px), 100% 50%, 100% calc(50% - 2px),
        100% calc(50% + 2px);
    }
    90%,
    100% {
      background-size: 8px 100%, 8px 4px, 8px 4px;
      background-position: 0 50%, 0 -2px, 0 calc(100% + 2px), 50% 50%, 50% -2px,
        50% calc(100% + 2px), 100% 50%, 100% -2px, 100% calc(100% + 2px);
    }
  }
`;

const Spinner = () => {
  return (
    <Outerdiv>
      <Div></Div>
    </Outerdiv>
  );
};

export default Spinner;

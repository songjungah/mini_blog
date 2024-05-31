import { useDispatch, useSelector } from "react-redux";
import "./MainPage.css";

import React from "react";
import { minus, plus, reset, sum } from "../redux/userRedux";

export default function MainPage() {
  const reduxSelector = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <div className="main-container">
      <h1>메인페이지 입니다.</h1>
      <p>{reduxSelector.reducer1.count}</p>
      <p>{reduxSelector.reducer1.user}</p>
      <div>
        <button onClick={() => dispatch(plus())}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(minus())}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(sum(3))}>인자로 받아온 수 많큼 증가</button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>초기화</button>
      </div>
    </div>
  );
}

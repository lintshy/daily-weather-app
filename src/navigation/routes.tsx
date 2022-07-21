import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { HomeScreen } from "../../src/screens/home/home.screen";
import { ChartScreen } from "../../src/screens/chart-home/chart-home";

export function RefresherStack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen blah={"string"} />}></Route>
        <Route path="/history" element={<ChartScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

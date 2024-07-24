import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DelayedQuotesPage from "./Page/DelayedQuotesPage";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <DelayedQuotesPage />
      </MainLayout>
    </>
  );
}

export default App;

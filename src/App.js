import Header from "./components/Header";
import { useState, useEffect } from "react";
function App() {
  const [money, setMoney] = useState(100);
  return (
    <div className="App">
      <Header money={money} />
    </div>
  );
}

export default App;

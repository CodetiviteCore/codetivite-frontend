import { SharedRoutes } from "./routes";
import { useEffect } from "react";
import Aos from 'aos';


function App() {

  useEffect(() => {
    Aos.init(
      {
        offset: 20,
      }
    )
  },[])

  return (
    <SharedRoutes/>
  );
}

export default App;

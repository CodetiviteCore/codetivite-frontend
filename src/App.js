import { SharedRoutes } from "./routes";
import { useEffect } from "react";
import Aos from 'aos';
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"


function App() {

  useEffect(() => {
    Aos.init(
      {
        offset: 20,
      }
    )
  }, [])
  
  //React query initialization
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <SharedRoutes />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  
  );
}

export default App;

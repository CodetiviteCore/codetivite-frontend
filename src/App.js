import { PrivateRoutes} from "./routes";
import { useEffect} from "react";
import Aos from "aos";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ConfigProvider } from "react-avatar";



function App() {
  useEffect(() => {
    Aos.init({
      offset: 20,
    }); 
  }, []);

  //React query initialization
  const queryClient = new QueryClient(
    // {
    //   defaultOptions: {
    //     queries: {
    //       refetchOnWindowFocus:false
    //     }
    //   }
    // }
  );

  //avatar component random colors
  const primaryColor = "#2AB255";
  const secondaryYellow = "#FCE459";
  const secondaryBlue = "#2475DF";
  const secondaryGreen = "#E6F9EC";
  return (
    <ConfigProvider
      colors={[
        primaryColor,
        secondaryYellow,
        secondaryBlue,
        secondaryGreen,
        "purple",
        "red",
        "gray",
      ]}
    >
      <QueryClientProvider client={queryClient}>
        {/* <SharedRoutes /> */}
        <PrivateRoutes />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    
    </ConfigProvider>
  );
}

export default App;

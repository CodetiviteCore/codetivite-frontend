import { PrivateRoutes } from "./routes";
import { useEffect } from "react";
import Aos from "aos";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ConfigProvider } from "react-avatar";
import 'react-circular-progressbar/dist/styles.css';
import { SharedRoutes } from './routes/RouteBuilder/SharedRoutes';
import { useSelector } from 'react-redux';
import { selectCarrer } from "./Redux store/auth/auth.selector";



function App() {
  const careerPathSelected = useSelector(selectCarrer)
  console.log("this is career path", careerPathSelected)
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
    //       refetchOnWindowFocus: false,
    //       enabled: false,
    //     }
    //   }
    // }
  );

  //avatar component random colors
  const primaryColor = "#2AB255";
  const secondaryYellow = "#FCE459";
  const secondaryBlue = "#2475DF";
  return (
    <ConfigProvider
      colors={[
        primaryColor,
        secondaryYellow,
        secondaryBlue,
        "purple",
        "red",
        "gray",
      ]}
    >
      <QueryClientProvider client={queryClient}>
        {
          careerPathSelected ? <PrivateRoutes />
            :
            <SharedRoutes />
        }

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>

    </ConfigProvider>
  );
}

export default App;

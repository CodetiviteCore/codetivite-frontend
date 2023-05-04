import { PrivateRoutes } from "./routes";
import { useEffect } from "react";
import Aos from "aos";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ConfigProvider } from "react-avatar";
import 'react-circular-progressbar/dist/styles.css';
import { SharedRoutes } from './routes/RouteBuilder/SharedRoutes';
import { useSelector } from 'react-redux';
import { selectCareerState } from "./Redux store/auth/auth.selector";
// import { ReactLenis } from "@studio-freight/react-lenis";
// import Lenis from "@studio-freight/lenis";
import { SkeletonTheme } from "react-loading-skeleton";


function App() {
  const careerPathSelected = useSelector(selectCareerState)
  console.log("this is career path", careerPathSelected)


  useEffect(() => {
    Aos.init({
      offset: 20,
    });
  }, []);

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  //   })


  //   function raf(time) {
  //     lenis.raf(time)
  //     requestAnimationFrame(raf)
  //   }

  //   requestAnimationFrame(raf)
  // }, [])


  //React query initialization
  const queryClient = new QueryClient(
    {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          enabled: false,
        }
      }
    }
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
      {/* <ReactLenis root> */}
        <SkeletonTheme baseColor="#F5F5F5" highlightColor="#fff">
          <QueryClientProvider client={queryClient}>

            <SharedRoutes />
            {
              careerPathSelected && <PrivateRoutes />
            }

            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </SkeletonTheme>
      {/* </ReactLenis> */}

    </ConfigProvider>
  );
}


export default App;

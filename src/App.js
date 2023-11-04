import { PrivateRoutes } from "./routes";
import { useEffect, useState } from "react";
import Aos from "aos";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ConfigProvider } from "react-avatar";
import 'react-circular-progressbar/dist/styles.css';
import { SharedRoutes } from './routes/RouteBuilder/SharedRoutes';
import { useSelector } from 'react-redux';
import { selectCareerState } from "./Redux store/auth/auth.selector";
import { selectUser } from "./Redux store/auth/auth.selector";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer, toast } from "react-toastify";
import 'react-loading-skeleton/dist/skeleton.css'
import { Disconnected } from './pages/SharedPages/404Page/404';



function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const careerPathSelected = useSelector(selectCareerState)

  useEffect(() => {
    Aos.init({
      offset: 20,
    });
  }, []);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      toast.success(`You're back online`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      }
      )
    }
    const handleOffline = () => {
      setIsOnline(false)
      toast.error(`You are offline, please connect`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      }
      )
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  })


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


  if (isOnline === false) {
    return <Disconnected />
  }

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
          <div>
            <SharedRoutes />
          </div>
          {(careerPathSelected) && <PrivateRoutes />}
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
        <ToastContainer />
      </SkeletonTheme>
      {/* </ReactLenis> */}
    </ConfigProvider>
  );
}


export default App;
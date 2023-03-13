import { PrivateRoutes, SharedRoutes } from "./routes";
import {
  useEffect,
  useLayoutEffect
} from "react";
import Aos from 'aos';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"
import { useDispatch } from 'react-redux';
import {
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { ConfigProvider } from "react-avatar";
import { signUpWithGoogle } from "./Redux store/auth/auth.action";



function App() {

  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()


  useEffect(() => {
    Aos.init(
      {
        offset: 20,
      }
    )

    const refresh = searchParams.toString() === ""

    if (!refresh) {
      let authToken = searchParams.get("authToken")
      const decodedToken = authToken && JSON.parse(atob(authToken.split('.')[1]))
      const userProfile = decodedToken?.profile
      dispatch(signUpWithGoogle(userProfile))
      navigate("/")
    }

  }, [])

  //React query initialization
  const queryClient = new QueryClient()

  //avatar component random colors
  const primaryColor = "#2AB255"
  const secondaryYellow = "#FCE459"
  const secondaryBlue = "#2475DF"
  const secondaryGreen = "#E6F9EC"
  return (
    <ConfigProvider colors={[primaryColor, secondaryYellow, secondaryBlue, secondaryGreen, "purple", "red", "gray"]}>
      <QueryClientProvider client={queryClient}>
        {/* <SharedRoutes /> */}
        <PrivateRoutes/>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ConfigProvider>


  );
}

export default App;

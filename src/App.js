import { PrivateRoutes } from "./routes";
import { useEffect, useContext, useState } from "react";
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
import { ModalContext } from './context/ModalContext';
import { Modal } from './components/Modal/Modal';
import { LandingModalVerify } from './pages/SharedPages/LandingPage/LandingPage.Styles';
import { VerifyMail, Google, LandingModalLogoRight, LandingModalLogoLeft } from "./assets/svgs";
import { LandingModal } from "./pages/SharedPages/LandingPage/LandingPage.Styles";
import { Puff } from 'react-loader-spinner';

function App() {
  const careerPathSelected = useSelector(selectCareerState)

  const { isModalOpen, emailModal } = useContext(ModalContext)

  const [isredirect, setIsRedirect] = useState(false)


  const redirect = () => {
    setIsRedirect(true)
    window.location.href = `https://codetivite-api2.onrender.com/api/v1.0/auth/login`
  }


  const redirectToMail = () => {
    window.location.href = "https://gmail.com"
  }

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
          <div>
            <Modal isOpen={isModalOpen}>
              {
                emailModal ?
                  <LandingModalVerify>
                    <div>
                      <VerifyMail />
                    </div>
                    <div>
                      <h4>Verify your email address</h4>
                      <p>We have sent you an email to the selected google account, click on the link to verify your account.</p>
                      <button onClick={redirectToMail}>
                        Check my mail
                      </button>
                    </div>

                  </LandingModalVerify> :
                  <LandingModal>
                    <div>
                      <LandingModalLogoLeft className='left' />
                      <LandingModalLogoRight className='right' />
                    </div>
                    <div>
                      <h4>Continue with your Google account.</h4>
                      <p>Getting started and getting back into your account has been simplified.
                        Continue using your google account.
                      </p>
                      <button onClick={redirect}>
                        {
                          isredirect ? <Puff
                            height="30"
                            width="30"
                            radius={1}
                            color="var(--white)"
                            ariaLabel="puff-loading"
                            wrapperStyle={{
                              backgroundColor: "transparent",
                              height: "fit-content",
                              padding: "0",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}
                            wrapperClass=""
                            visible={true}
                          />
                            :
                            <>
                              <Google />
                              <p>Continue with your Google account</p>
                            </>
                        }
                      </button>
                    </div>

                  </LandingModal>
              }
            </Modal>
            <SharedRoutes />
          </div>

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

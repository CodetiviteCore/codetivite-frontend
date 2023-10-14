
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BlogLayout, MainLayout } from '../../components/Layouts'
import { LoaderComponent, Input, Button } from '../../ui_elements'
import { Modal } from '../../components/Modal/Modal';
import { ModalContext } from '../../context/ModalContext';
import { LandingModalVerify, LandingModal } from '../../pages/SharedPages/LandingPage/LandingPage.Styles';
import { useContext, useState } from 'react';
import { useApiPost } from '../../custom-hooks/useApiPost';
import { Puff } from 'react-loader-spinner';
import {
    LandingModalLogoLeft,
    LandingModalLogoRight,
    VerifyMail
} from '../../assets/svgs';
import AuthServices from '../../services/authServices';




const LazyLanding = React.lazy(() => import("../../pages/SharedPages/LandingPage/LandingPage"))
const LazyCommunity = React.lazy(() => import("../../pages/SharedPages/CommunityPage/CommunityPage"))
const LazyAboutUs = React.lazy(() => import("../../pages/SharedPages/AboutUsPage/AboutUs"))
const LazyContactUs = React.lazy(() => import("../../pages/SharedPages/ContactUsPage/ContactUs"))
const LazyBLog = React.lazy(() => import("../../pages/SharedPages/BlogPage/Blog"))
const LazyClarityTest = React.lazy(() => import("../../pages/SharedPages/ClarityTestPage/ClarityTest"))





export const SharedRoutes = () => {
    const { isModalOpen, emailModal, setEmailModal } = useContext(ModalContext)
    const [email, setEmail] = useState("")

    const redirectToMail = () => {
        window.open("https://gmail.com", "_blank");
    }

    const {
        mutate: login,
        isLoading
    } = useApiPost(
        () => AuthServices.magicLinkSignup(email),
        [],
        () => {
            setEmailModal(true)
        }
    )


    const sharedLayouts = [
        {
            path: "/",
            component: <LazyLanding />
        },
        {
            path: "/community",
            component: <LazyCommunity />
        },
        {
            path: "/about-us",
            component: <LazyAboutUs />
        },
        {
            path: "/clarity-test",
            component: <LazyClarityTest />
        },

        {
            path: "/contact-us",
            component: <LazyContactUs />
        },
        {
            path: "/our-blog",
            component: <LazyBLog />
        },
    ]

    return (
        <>
            <Modal isOpen={isModalOpen}>
                {isLoading ? (

                    <Puff
                        height="100"
                        width="100"
                        radius={1}
                        color="var(--primary)"
                        ariaLabel="puff-loading"
                        wrapperStyle={{
                            backgroundColor: "transparent",
                            height: "100%",
                            width:"100%",
                            padding: "0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                        wrapperClass=""
                        visible={true}
                    />
                ) : emailModal ? (
                    <LandingModalVerify>
                        <div>
                            <VerifyMail />
                        </div>
                        <div>
                            <h4>Verify your email address</h4>
                            <p>
                                We have sent you an email to the selected google account, click on
                                the link to verify your account.
                            </p>
                            <button onClick={redirectToMail}>Check my mail</button>
                        </div>
                    </LandingModalVerify>
                ) : (
                    <LandingModal>
                        <div>
                            <LandingModalLogoLeft className="left" />
                            <LandingModalLogoRight className="right" />
                        </div>
                        <div>
                            <h4>Please enter your email.</h4>
                            <p>
                                Getting started and getting back into your account has been
                                simplified. Continue using your email.
                            </p>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    login();
                                }}
                            >
                                <Input
                                    placeholder="Enter your email"
                                    border
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    value={email}
                                    autoFocus={true}
                                    width={"-webkit-fill-available"}
                                />
                                <Button primary type="submit">
                                    Login or Sign up
                                </Button>
                            </form>
                        </div>
                    </LandingModal>
                )}
            </Modal>


            <Routes>
                {sharedLayouts.map((routes, index) => (
                    <Route
                        key={index}
                        path={routes.path}
                        element={
                            routes.path === "/our-blog" ? (
                                <React.Suspense fallback={<LoaderComponent />}>
                                    <MainLayout>
                                        <BlogLayout>
                                            {routes.component}
                                        </BlogLayout>
                                    </MainLayout>
                                </React.Suspense>

                            ) : (
                                <React.Suspense fallback={<LoaderComponent />}>
                                    <MainLayout>{routes.component}</MainLayout>
                                </React.Suspense>
                            )
                        }
                    />
                ))}
            </Routes>
        </>

    )
}

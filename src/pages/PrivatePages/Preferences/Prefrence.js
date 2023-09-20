import { useState } from "react";
import { PreferenceButton } from "../../../ui_elements";
import DashboardImage from "../../../assets/images/dashboardImage.png";
import {
    PreferenceDetails,
    PrefrenceContainer,
    PreferenceDashboard,
    PreferenceDetailsHeader,
    PreferenceCardContainer,
    PreferencDashboardeDetails,
    Save,
} from "./Preference.styles";
import { useApiGet } from "../../../custom-hooks/useApiGet";
import PreferenceServices from "../../../services/preferenceServices";
import { useDispatch } from "react-redux";
import { setCareerPath } from "../../../Redux store/auth/auth.action";
import { useNavigate, useLocation } from "react-router-dom";
import { useApiPost } from "../../../custom-hooks/useApiPost";
import { addToVisitedRoutes } from "../../../Redux store/auth/auth.action";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'




const Prefrence = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [selectCareerPath, setSelectCareerPath] = useState(null)

    const { data: preferencesResponse } = useApiGet(
        "Preferences",
        PreferenceServices.getPreferences,
        {
            enabled: true,
            retry: false,
            refetchOnWindowFocus: false
        }

    );
    const { mutate: updateCareer } = useApiPost(PreferenceServices.updateCareerPath)
    const [activeIndex, setActiveIndex] = useState(-1);


    const selectPreference = (skill) => {
        setSelectCareerPath(skill)
    };


    const submitCareerPath = () => {
        dispatch(setCareerPath(selectCareerPath))
        updateCareer(selectCareerPath)
        dispatch(addToVisitedRoutes(location?.pathname.toString()))
        //TODO: navigate('/dashboard', { replace: true });
        navigate('/roadmap', { replace: true });
    }





    return (
        <PrefrenceContainer>
            <PreferenceDetails>
                <PreferenceDetailsHeader>
                    <h1>{preferencesResponse ? "Select your Carrer Path" : <Skeleton width={"50%"} height={50} />}</h1>
                    <p>{preferencesResponse ? "Choose a career path to enable us serve you better." : <Skeleton width={"40%"} height={20} />}</p>
                </PreferenceDetailsHeader>
                <PreferenceCardContainer>
                    {preferencesResponse
                        ? preferencesResponse.map((item, index) => (
                            <PreferenceButton
                                key={index}
                                onClick={() => {
                                    setActiveIndex(index)
                                    selectPreference(item)
                                }}
                                active={index === activeIndex}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </PreferenceButton>
                        ))
                        :
                        <>
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />
                            <Skeleton
                                height={50}
                                width={100}
                            />


                        </>
                    }
                </PreferenceCardContainer>
                {
                    preferencesResponse ?
                        <Save primary
                            onClick={submitCareerPath}
                        >
                            Save and continue to dashboard
                        </Save>
                        :
                        <Skeleton width={"30%"} height={60} style={{
                            marginTop: "100px"
                        }} />
                }

            </PreferenceDetails>
            <PreferenceDashboard>
                <PreferencDashboardeDetails>
                    <h2>Codetivite got you covered!</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Lobortis neque odio proin
                        diam magna sed feugiat maecenas. Quam quis diam vel non feugiat
                        fames facilisi.
                    </p>
                </PreferencDashboardeDetails>
                <img src={DashboardImage} alt={"dashboard_image"} />
            </PreferenceDashboard>

        </PrefrenceContainer>
    );
};

export default Prefrence;

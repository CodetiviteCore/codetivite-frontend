import { useState } from "react";
import { Input, PreferenceButton } from "../../../ui_elements";
import DashboardImage from "../../../assets/images/dashboardImage.png";
import {
    PreferenceDetails,
    PrefrenceContainer,
    PreferenceDashboard,
    PreferenceDetailsHeader,
    PreferenceCardContainer,
    PreferencDashboardeDetails,
    Save,
    CollectDetails,
} from "./Preference.styles";
import { useApiGet } from "../../../custom-hooks/useApiGet";
import PreferenceServices from "../../../services/preferenceServices";
import { useDispatch } from "react-redux";
import { setCareerPath } from "../../../Redux store/auth/auth.action";
import { useNavigate, useLocation } from "react-router-dom";
import { useApiPost } from "../../../custom-hooks/useApiPost";
import { addToVisitedRoutes } from "../../../Redux store/auth/auth.action";
import Skeleton from "react-loading-skeleton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const preferenceSchema = yup.object().shape({
    firstname: yup
        .string()
        .nullable()
        .required("Please enter your first name"),
    lastname: yup
        .string()
        .nullable()
        .required("Please enter your last name"),
})


const Prefrence = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [selectCareerPath, setSelectCareerPath] = useState(null)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(preferenceSchema),
    });


    const { data: preferencesResponse } = useApiGet(
        "Preferences",
        PreferenceServices.getPreferences,
        {
            enabled: true,
            retry: false,
            refetchOnWindowFocus: false
        }

    );
    const { mutate: updateCareer, isLoading } = useApiPost(
        PreferenceServices.updateCareerPath,
        [],
        () => {
            navigate('/roadmap', { replace: true });
        }
    )
    const [activeIndex, setActiveIndex] = useState(-1);


    const selectPreference = (skill) => {
        setSelectCareerPath(skill)
    };


    const onSubmit = (data) => {
        const request = {
            ...data,
            careerPath: selectCareerPath
        }
        dispatch(setCareerPath(selectCareerPath))
        updateCareer(request)
        dispatch(addToVisitedRoutes(location?.pathname.toString()))
        // TODO: navigate('/dashboard', { replace: true });
    }



    return (
        <PrefrenceContainer>
            <PreferenceDetails onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {
                        preferencesResponse &&
                        <CollectDetails>
                            <h1>Welcome</h1>
                            <p>Please enter your details</p>
                            <Input
                                border
                                placeholder="Enter your first name"
                                register={register}
                                id="firstname"
                                error={errors.firstname}
                            />
                            <Input
                                border
                                placeholder="Enter your last name"
                                register={register}
                                id="lastname"
                                error={errors.lastname}

                            />
                        </CollectDetails>
                    }
                    <PreferenceDetailsHeader>
                        <h1>{preferencesResponse ? "Select your Career Path" : <Skeleton width={"50%"} height={50} />}</h1>
                        <p>{preferencesResponse ? "Choose a career path to enable us serve you better." : <Skeleton width={"40%"} height={20} />}</p>
                    </PreferenceDetailsHeader>

                    <PreferenceCardContainer>
                        {preferencesResponse
                            ? preferencesResponse.map((item, index) => (
                                <PreferenceButton
                                    key={index}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        selectPreference(item);
                                    }}
                                    active={index === activeIndex}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </PreferenceButton>
                            ))
                            : [...Array(14)].map((_, index) => (
                                <Skeleton
                                    key={index}
                                    height={50}
                                    width={100}
                                />
                            ))
                        }
                    </PreferenceCardContainer>
                    {
                        preferencesResponse ?
                            <Save primary
                                type="submit"
                            >
                                {
                                    isLoading ? "Saving..." : " Save and continue to dashboard"
                                }

                            </Save>
                            :
                            <Skeleton width={"30%"} height={60} style={{
                                marginTop: "100px"
                            }} />
                    }

                </div>

            </PreferenceDetails>
            <PreferenceDashboard>
                <PreferencDashboardeDetails>
                    <h2>Codetivite got you covered!</h2>
                    <p>
                        Welcome aboard! Our goal is to ensure you get enough experience to land you a solid job in tech.
                    </p>
                </PreferencDashboardeDetails>
                <img src={DashboardImage} alt={"dashboard_image"} />
            </PreferenceDashboard>

        </PrefrenceContainer>
    );
};

export default Prefrence;

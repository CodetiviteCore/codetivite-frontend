import { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { useApiPost } from "../../../custom-hooks/useApiPost";


const Prefrence = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [selectCareerPath, setSelectCareerPath] = useState(null)
    const { data: preferencesRespsonse } = useApiGet("Preferences", PreferenceServices.getPreferences);
    const { mutate: updateCareer } = useApiPost(PreferenceServices.updateCareerPath)
    // console.log(Cookies.get("authToken"))


    const selectPreference = (skill) => {
        setSelectCareerPath(skill)
     
    };

    const submitCareerPath = () => {
        dispatch(setCareerPath(selectCareerPath))
        updateCareer(selectCareerPath)
        navigate("/dashboard")
    }

    useEffect(() => {
        console.log(selectCareerPath)
    },[selectCareerPath])


    return (
        <PrefrenceContainer>
            <PreferenceDetails>
                <PreferenceDetailsHeader>
                    <h1>Selecte your Prefrence</h1>
                    <p>Choose a career path to enable us serve you better.</p>
                </PreferenceDetailsHeader>
                <PreferenceCardContainer>
                    {preferencesRespsonse?.map((item, index) => (
                        <PreferenceButton
                            onClick={() => selectPreference(item)}
                            index={index}
                            key={index}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </PreferenceButton>
                    ))}
                </PreferenceCardContainer>
                <Save primary
                    onClick={submitCareerPath}
                >
                    Save and continue to dashboard
                </Save>
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

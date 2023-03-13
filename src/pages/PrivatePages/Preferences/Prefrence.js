import {useState} from 'react'
import {PreferenceButton } from '../../../ui_elements'
import DashboardImage from "../../../assets/images/dashboardImage.png"
import {
    PreferenceDetails,
    PrefrenceContainer,
    PreferenceDashboard,
    PreferenceDetailsHeader,
    PreferenceCardContainer,
    PreferencDashboardeDetails,
    Save
} from './Preference.styles'

const Prefrence = () => {
    const [preferenceState, setPreferenceState] = useState(null)
    const [preferences, setPreferences] = useState([])

    const preference =  [
        "Frontend developer",
        "Backend developer",
        "Solidity developer",
        "Blockchain developer",
        "De-fi developer",
        "UIUX Designer",
        "Technical writing",
        "Full stack developer",
        "Product manager",
        "Community manager",
        "Rust developer",
        "Devops Engineer",
        "Graphic Designer",
        "Smart contract debveloper"
    ]

    const selectPreferences = (skill, index) => {
        if (preferences.includes(skill.toString())) {
            setPreferenceState(null)
            setPreferences((preferences)=>preferences.filter((item)=>item!==skill.toString()))
        }
        else {
            setPreferenceState(index)
            setPreferences((preferences)=>[...preferences, skill.toString()])
        }
    }
    
    return (
        <PrefrenceContainer>
            <PreferenceDetails>
                <PreferenceDetailsHeader>
                    <h1>Selecte your Prefrence</h1>
                    <p>Choose a career path to enable us serve you better.</p>
                </PreferenceDetailsHeader>
                <PreferenceCardContainer>
                    {
                        preference.map((item, index) => <PreferenceButton
                            preference
                            preferences={preferences}
                            setPreferences={setPreferences}
                            preferenceState={preferenceState}
                            setPreferenceState={()=>setPreferenceState(item)}
                            onClick={selectPreferences}
                            selected={preference.includes(item)}
                            index={index}
                            key={index}>
                            {item}
                        </PreferenceButton>)
                    }
                </PreferenceCardContainer>
                <Save primary>Save and continue to dashboard</Save>
            </PreferenceDetails>
            <PreferenceDashboard>
                <PreferencDashboardeDetails>
                    <h2>Codetivite got you covered!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Lobortis neque odio proin diam magna sed feugiat maecenas.
                        Quam quis diam vel non feugiat fames facilisi.
                    </p>
                </PreferencDashboardeDetails>
                <img src={DashboardImage} alt={"dashboard_image"} />
            </PreferenceDashboard>
        </PrefrenceContainer>
    )
}

export default Prefrence
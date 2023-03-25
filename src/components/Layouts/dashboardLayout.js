import styled from "styled-components"
import { DashboardSideBar } from "../dashboardSideBar/dashboardSideBar"
import { DashboardNavabar } from '../dashboardNavbar/dashboardNavbar';


const LayoutBody = styled.div`
    display: flex;
    max-height: 100vh !important;
    background-color: var(--deep-white);
    
    >div{
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`

export const DashboardLayout = ({ children }) => {
    return (
        <LayoutBody>
            <DashboardSideBar />
            <div>
                <DashboardNavabar />
                {children}
            </div>

        </LayoutBody>
    )
}
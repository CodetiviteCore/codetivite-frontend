import styled from "styled-components"
import User from "../../assets/images/toib.png"

const DashboardNav = styled.nav`
    height: 4.75rem;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--navborders);
    padding: 0 1.4rem;
    
`
const DashboardTitle = styled.div`
    h3{
        font-size: 1.25rem;
        font-weight: 600;
    }
`
const DashboardUserDetails = styled.div`
    display: flex;
    gap: 0.5rem;
    img{
        width: 38px;
        height: 38px;
        object-fit: contain;
    }
    >div{
        height: 38px;
        width: 38px;
        background-color: var(--deep-white);
        border-radius: 50%;
    }
    section{
        display: flex;
        gap: 8px;
        h5{
            font-size: 12px;
            font-weight: 600;
        }
        p{
            font-size: 10px;
        }
        span{
            transform: rotate(90deg);
            font-size: 30px;
            :hover{
                cursor: pointer;
            }
        }
    }
`

export const DashboardNavabar = () => {
    return (
        <DashboardNav>
            <DashboardTitle>
                <h3>Dashboard</h3>
                <p>Welcome to codetivite, another day to build amazing products.</p>
            </DashboardTitle>
            <DashboardUserDetails>
                <div />
                <div/>
                <img src={User} alt="avatar Icon"/>
                <section>
                    <div>
                    <h5>Prince Chijioke</h5>
                    <p>Product Designer</p>
                    </div>
                    <span>&gt;</span>
                </section>
            </DashboardUserDetails>
        </DashboardNav>
    )
}
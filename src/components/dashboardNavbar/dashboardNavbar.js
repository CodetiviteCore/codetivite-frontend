import styled from "styled-components"
import User from "../../assets/images/toib.png"
import { useLayoutEffect, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../Redux store/auth/auth.selector';
import Avatar from 'react-avatar';
import { textFormat } from "../../utils/constants";
import { Notification } from "../../assets/svgs";
import { useApiGet } from "../../custom-hooks/useApiGet";
import AuthServices from "../../services/authServices";
import { signUpWithGoogle } from "../../Redux store/auth/auth.action";



export const DashboardNavabar = () => {
    const [usernames, setUsernames] = useState({
        firstname: "",
        lastname: ""
    });
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const { _id } = user

    const {
        data: updatedUser,
        isFetched
    } = useApiGet(
        "updated-user-details",
        () => AuthServices.getUpdatedUserDetails(_id),
        {
            enabled: true
        }
    )

    useLayoutEffect(() => {
        if (user) {
            const { firstName, lastName } = user
            setUsernames({
                firstname: firstName,
                lastname: lastName
            });
        }
    }, [user]);

    useEffect(() => {
        if (updatedUser) {
            dispatch(signUpWithGoogle(updatedUser?.user))
        }
    }, [dispatch, updatedUser])



    return (
        <DashboardNav>
            <DashboardTitle>
                <h3>Dashboard</h3>
                <p>Welcome to codetivite, another day to build amazing products.</p>
            </DashboardTitle>
            <DashboardUserDetails>
                <div>
                    <Notification />
                </div>
                {
                    user ?
                        <AvatarContainer>
                            <NavAvatar
                                name={`${usernames.firstname} ${usernames.lastname}`}
                                round={true}
                                size="40"
                                fgColor='	#FFF'
                            />
                        </AvatarContainer>
                        :
                        <img src={User} alt="avatar Icon" />
                }


                <section>
                    <div>
                        <h5>{usernames.firstname} {usernames.lastname}</h5>
                        <p>{isFetched && textFormat(user?.careerPath)}</p>
                    </div>
                    <span>&gt;</span>
                </section>
            </DashboardUserDetails>
        </DashboardNav>
    )
}

const AvatarContainer = styled.div`
  position: relative;
`

const NavAvatar = styled(Avatar)`
  :hover{
    cursor: pointer;
  }
  span{
    color:var(--white) !important;
  }
  `


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
    align-items: center !important;
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
        display:flex;
        align-items:center;
        justify-content:center;
    }
    section{
        display: flex;
        gap: 10px;
        h5{
            font-size: 1rem;
            font-weight: 600;
            margin-bottom:-5px;
        }
        p{
            font-size: 0.9rem;
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

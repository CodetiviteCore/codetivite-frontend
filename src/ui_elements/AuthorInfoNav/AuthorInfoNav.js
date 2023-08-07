import styled from "styled-components";
import { AuthorDetails } from "../AuthorDetails/authorDetails";
import { Avatar } from 'react-avatar';
import AvatarImage from "../../assets/images/sophia.png"


export const AuthorInfoNav = (

) => {
  return (
      <NavContaier>
          <AuthorDetails
              author={"Audrey Onyeike"}
              Avatar={AvatarImage}
              time={"Mon, 26 Jan 2023"}
          />
      </NavContaier>
  )
}

const NavContaier = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
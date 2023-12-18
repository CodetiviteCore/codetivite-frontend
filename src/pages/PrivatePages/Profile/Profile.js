import React from "react";
import styled from "styled-components";
import { devices } from "../../../utils/MediaQueiyBreakPoints";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const CardContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem 1rem;
  height: 100vw;
  @media ${devices.tablet} {
    flex-direction: column;
    padding: 1rem;
  }
`;

const ProfilePhoto = styled.section`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  background-color: #ffffff;
  padding: 2rem;
  @media ${devices.mobileL} {
    width: 60%;
    padding: 1rem;
  }
  @media ${devices.tablet} {
    padding: 1rem;
  }
  img {
    @media ${devices.tablet} {
      width: 90px;
      height: 90px;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    padding-top: 0.5rem;
    @media ${devices.tablet} {
      font-size: 14px;
      padding-top: 0.3rem;
    }
  }
  h5 {
    font-size: 10px;
    font-weight: 400;
    color: #2ab255;
    @media ${devices.tablet} {
      font-size: 8px;
    }
  }
  h6 {
    font-size: 10px;
    font-weight: 400;
    @media ${devices.tablet} {
      font-size: 8px;
    }
  }
`;

const ProfileDetails = styled.section`
  width: 80%;
  background-color: #fff;
  @media ${devices.tablet} {
    width: 100%;
  }
  header {
    background-color: #e6f9ec;
    padding: 1.2rem 2rem;
    font-size: 20px;
    font-weight: 600;
    @media ${devices.tablet} {
      padding: 1rem 1.5rem;
      font-size: 16px;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  @media ${devices.tablet} {
    gap: 0.5rem;
    padding: 1rem;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    width: 100%;
    @media ${devices.tablet} {
      gap: 0.5rem;
      flex-wrap: wrap;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.2rem;
      width: 50%;
      @media ${devices.tablet} {
        gap: 0.1rem;
        padding: 8px;
        width: 100%;
      }
      &.aboutMe {
        width: 100%;
      }
      &.button {
        width: 100%;
        align-items: flex-end;
        border: none;
      }
      label {
        color: #344054;
        font-size: 14px;
        font-weight: 600;
        @media ${devices.tablet} {
          font-size: 10px;
        }
      }
      input {
        border: 1px solid #dddddd;
        padding: 12px;
        color: #667085;
        font-size: 14px;
        font-weight: 400;
        width: 90%;
        @media ${devices.tablet} {
          font-size: 10px;
        }
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: #344055;
        }
      }
      textarea {
        font-size: 14px;
        width: 100%;
        height: 85px;
        border: 1px solid #dddddd;
        padding: 12px;
        resize: none;
        overflow: hidden;
        @media ${devices.tablet} {
          font-size: 12px;
        }
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: #667085;
        }
      }
      p {
        font-size: 10px;
        color: #ef4444;
      }
      button {
        background-color: #2ab255;
        padding: 1rem 2rem;
        border: 1px solid transparent;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        @media ${devices.tablet} {
          padding: 0.5rem 1.5rem;
          font-size: 12px;
        }
      }
    }
  }
`;

const schema = yup.object({
  firstName: yup.string().required("First Name is required!"),
  lastName: yup.string().required("Last Name is required!"),
  email: yup
    .string()
    .email("Email format is not valid!")
    .required("Email is required!"),
  track: yup.string().required("Track is required!"),
  about: yup.string().required("About Me is required!"),
});

const Profile = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      track: "",
      about: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);

  return (
    <CardContainer>
      <ProfilePhoto>
        <img src="profile_photo.png" alt="profile" />
        <h3>Prince Chijioke</h3>
        <h5>Product Designer</h5>
        <h6>princechijioke@gmail.com</h6>
      </ProfilePhoto>
      <ProfileDetails>
        <header>User Details</header>
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <section>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Prince"
                {...register("firstName")}
              />
              <p>{errors.firstName?.message}</p>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Chijioke"
                {...register("lastName")}
              />
              <p>{errors.lastName?.message}</p>
            </div>
          </section>

          <section>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="princechijioke@gmail.com"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <label htmlFor="track">Track</label>
              <input
                type="text"
                id="track"
                placeholder="Product Designer"
                {...register("track")}
              />
              <p>{errors.track?.message}</p>
            </div>
          </section>

          <section>
            <div className="aboutMe">
              <label htmlFor="aboutMe">About Me</label>
              <textarea
                id="aboutMe"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, leo eu malesuada lacinia, est sem eleifend libero, ut ornare neque odio a mauris. Proin rutrum, massa congue posuere congue, metus ex ornare dolor, quis placerat mauris tortor at nunc. Proin vel fermentum nibh, eget lobortis nisl. Donec interdum tellus vitae velit sodales, eget venenatis neque viverra. Sed posuere elit sit amet elit finibus"
                col="4"
                {...register("about")}
              />
              <p>{errors.about?.message}</p>
            </div>
          </section>

          <section>
            <div className="button">
              <button>Save Changes</button>
            </div>
          </section>
        </Form>
      </ProfileDetails>
    </CardContainer>
  );
};

export default Profile;

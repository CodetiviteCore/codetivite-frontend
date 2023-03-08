import { useQuery } from "react-query";
import { signUserWithGoogleAuth } from '../api/authApi';

export const useApiGet= (onSuccess, onError) => {
    return useQuery(
        "Google-sign-in/up",
        signUserWithGoogleAuth,
        {
            onSuccess,
            onError,
            enabled: false
        }
    )
}
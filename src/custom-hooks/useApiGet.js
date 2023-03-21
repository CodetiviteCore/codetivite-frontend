import { useQuery } from "react-query";


export const useApiGet = (onSuccess, onError, queryKey, apiCall) => {
    return useQuery(
        `${queryKey}`,
        ()=>apiCall,
        {
            onSuccess,
            onError,
            enabled: false,
            
        }
    )
}
import { useQuery } from "react-query";

//react-query custom hook
export const useApiGet = (key, queryFunction) => {
    return useQuery(
        key,
        queryFunction,
        {
            enabled: true,
            retry:false
        }
    )
}
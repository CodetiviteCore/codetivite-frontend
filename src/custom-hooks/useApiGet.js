import { useQuery } from "react-query";

//react-query custom hook
export const useApiGet = (key, queryFunction, properties) => {
    return useQuery(
        key,
        queryFunction,
        properties,

    )
}
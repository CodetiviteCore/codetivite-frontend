import { useQuery } from "react-query";

//react-query custom hook
export const useApiGet = (key, queryFunction, properties) => {
    console.log(properties, "query property")
    return useQuery(
        key,
        queryFunction,
        properties
    )
}
import { useMutation, useQueryClient } from "react-query"

export const useApiPost = (queryFunction, keyToInvalidate) => {
    const queryClient = useQueryClient()
    return useMutation(
        queryFunction,
        {
            onSuccess: () => {
                queryClient.invalidateQueries(keyToInvalidate)
            }
        }
    )
}
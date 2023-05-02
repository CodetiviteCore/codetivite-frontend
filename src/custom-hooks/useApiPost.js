import { useMutation, useQueryClient } from "react-query"

export const useApiPost = (queryFunction, keyToInvalidate,success,error) => {
    const queryClient = useQueryClient()
    return useMutation(
        queryFunction,
        {
            
            onSuccess: () => {
                queryClient.invalidateQueries(keyToInvalidate)
                success()
            },
            onError:error

        }
    )
}
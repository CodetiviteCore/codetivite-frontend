import { useMutation, useQueryClient } from "react-query"

export const useApiPost = (queryFunction, keysToInvalidate, success, error) => {
    const queryClient = useQueryClient();
    return useMutation(queryFunction, {
        onSuccess: () => {
            keysToInvalidate.forEach((key) => {
                queryClient.invalidateQueries(key);
            });
            success();
        },
        onError: error,
    });
};
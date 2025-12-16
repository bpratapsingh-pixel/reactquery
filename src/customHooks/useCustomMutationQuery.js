"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * Reusable custom mutation hook
 */
export const useCustomMutationQuery = ({
  mutationFn,
  invalidateQueryKeys = [],
  onSuccess,
  onError,
  onSettled,
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,

    onSuccess: (data, variables, context) => {
      invalidateQueryKeys.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });

      if (onSuccess) onSuccess(data, variables, context);
    },

    onError: (error, variables, context) => {
      console.error("Mutation failed:", error);
      if (onError) onError(error, variables, context);
    },

    onSettled: (data, error, variables, context) => {
      if (onSettled) onSettled(data, error, variables, context);
    },
  });
};

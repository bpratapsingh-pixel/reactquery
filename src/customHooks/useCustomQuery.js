"use client";

import { useQuery } from "@tanstack/react-query";

/**
 * Simple reusable query hook
 * (NO pagination)
 */
export const useCustomQuery = ({
  queryKey = [],
  queryFn,
  staleTime = 0,
  retry = 3,
  refetchOnWindowFocus = true,
  enabled = true,
}) => {
  if (!queryKey.length) {
    throw new Error("queryKey is required");
  }

  return useQuery({
    queryKey,
    queryFn,
    staleTime,
    retry,
    refetchOnWindowFocus,
    enabled,
  });
};

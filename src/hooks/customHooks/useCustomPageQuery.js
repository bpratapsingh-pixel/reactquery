"use client";

import { useQuery } from "@tanstack/react-query";

/**
 * Custom Page-based Query Hook
 * - For numbered pagination (page 1, 2, 3...)
 * - Safe & predictable
 */
export const useCustomPageQuery = ({
  page = 1,
  queryKey = [],
  queryFn,
  staleTime = 0,
  retry = 3,
  refetchOnWindowFocus = false,
  keepPreviousData = false,
  enabled = true,
}) => {
  if (!queryKey.length) {
    throw new Error("queryKey is required");
  }

  return useQuery({
    queryKey: [...queryKey, page],
    queryFn: () => queryFn(page),
    staleTime,
    retry,
    refetchOnWindowFocus,
    enabled,
    ...(keepPreviousData && {
      placeholderData: (prev) => prev,
    }),
  });
};

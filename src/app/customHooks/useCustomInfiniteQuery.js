"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

export const useCustomInfiniteQuery = ({
  queryKey = [],
  queryFn,
  initialPageParam = 1,
  getNextPageParam,
  staleTime = 0,
  retry = 3,
  refetchOnWindowFocus = true,
  enabled = true,
}) => {
  if (!queryKey.length) {
    throw new Error("queryKey is required");
  }

  return useInfiniteQuery({
    queryKey,
    queryFn,
    initialPageParam,
    getNextPageParam,
    staleTime,
    retry,
    refetchOnWindowFocus,
    enabled,
  });
};

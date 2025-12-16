"use client";

import { useQuery } from "@tanstack/react-query";

export const useCustomQuery = ({
  page = 1,
  queryKey = [],
  queryFn,
  staleTime = 0,
  retry = 3,
  refetchOnWindowFocus = true,
  keepPreviousData = false,
}) => {
  if (!queryKey.length) {
    throw new Error("queryKey is required");
  }

  return useQuery({
    queryKey: [...queryKey],
    queryFn: () => queryFn(page),
    staleTime,
    retry,
    refetchOnWindowFocus,
    keepPreviousData,
  });
};

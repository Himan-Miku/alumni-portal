"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const TanstackProvider = ({ children }: any) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;

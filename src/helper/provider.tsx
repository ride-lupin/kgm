"use client";

import { useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OverlayProvider } from "@toss/use-overlay";

const Provider = ({ children }: React.PropsWithChildren) => {
  const [client] = useState(
    new QueryClient({
      // todo error handling
      // queryCache: new QueryCache({
      //   onError: (error) =>
      //     // toast.error(`Something went wrong: ${error.message}`),
      // }),
      defaultOptions: {
        queries: {
          retry: 1,
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <OverlayProvider>{children}</OverlayProvider>
    </QueryClientProvider>
  );
};

export default Provider;

import { QueryCache, QueryClient } from '@tanstack/react-query';
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import { createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import type { AppRouter } from '../../../server/src/routers';
import { toast } from 'sonner';
import superjson from "superjson";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            toast.error(error.message, {
                action: {
                    label: "retry",
                    onClick: () => {
                        queryClient.invalidateQueries();
                    },
                },
            });
        },
    }),
});

const url = process.env.NEXT_PUBLIC_SERVER_URL
    ? `${process.env.NEXT_PUBLIC_SERVER_URL}/trpc`
    : "http://localhost:3000/trpc";

const trpcClient = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            transformer: superjson,
            url: url,
        }),
    ],
})

export const trpc = createTRPCOptionsProxy<AppRouter>({
    client: trpcClient,
    queryClient,
});


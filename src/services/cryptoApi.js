import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '8aec31ef64mshfda9dd72fe572cdp19c3a6jsn59bf9b58725b',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = url => ({
    url,
    headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCryptos: builder.query({
            query: count => createRequest(`/coins?limit=${count}`),
        }),
    }),
});

export const { useGetCryptosQuery } = cryptoApi;

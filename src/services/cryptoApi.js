import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'b08d2796abmsh1587b262adbfd02p175bf7jsne900c0f7dbc1',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/stats';

const createRequest = url => ({
    url,
    headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    }),
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'b08d2796abmsh1587b262adbfd02p175bf7jsne900c0f7dbc1',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = url => ({
    url,
    headers: cryptoNewsHeader,
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) =>
                createRequest(
                    `/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`,
                ),
        }),
    }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

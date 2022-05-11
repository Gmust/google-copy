import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../models/IUser";


export const usersAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'https://6245b0906b7ecf057c22fce6.mockapi.io'}
    ),
    tagTypes: ['User'],
    endpoints: (build) => ({
        getUsers: build.query<IUser[], number>({
            query: (limit) => `/users`,
            providesTags: (result) =>
                result
                    ? [...result.map(({id}) => ({type: 'User' as const, id})), 'User']
                    : ['User'],
        }),
        addUser: build.mutation<IUser, IUser>({
            query: (body) => ({
                url: `/users`,
                method: 'POST',
                body
            })
        }),
        updateUser: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: `/passwords`,
                method: 'POST',
                body: user
            })
        })
    })
});
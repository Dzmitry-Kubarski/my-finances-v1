
import React from 'react';
import { useQuery } from 'react-query'
import axios from 'axios'
import { AuthContext } from '../../src/context/AuthContext'

export default function useTransactionsCategory(params) {

    const { token, logout } = React.useContext(AuthContext);

    const paramsUrl = Object.keys(params).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');

    return useQuery('transactions-category', () =>

        axios.get('/api/link/category/?' + paramsUrl, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.data)

            .catch(e => {

                if (e.response.status === 401) logout();

                throw new Error(e)
            })
    )
}


import React from 'react';

import { useQuery } from 'react-query'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

export default function useTransactions() {
    const { token, logout } = React.useContext(AuthContext)

    return useQuery('transactions', () =>
        axios.get('/api/link', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.data)

            .catch(e => {

                if (e.response.status === 401) logout();

                throw new Error(e)
            })
    )
}


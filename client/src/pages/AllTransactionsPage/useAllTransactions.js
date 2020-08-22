//core
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

//context
import { AuthContext } from '../../context/AuthContext'


export default function useTransactionsCategory() {
    const { token, logout } = React.useContext(AuthContext);

    return useQuery('transactions-all', () =>

        axios.get('/api/transaction/all', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.data)

            .catch(e => {

                if (e.response.status === 401) logout();

                throw new Error(e)
            })
    )
}

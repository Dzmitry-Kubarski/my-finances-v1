//core
import React from 'react';
import { useQuery } from 'react-query';

//context
import { AuthContext } from '../../context/AuthContext';


export default function useTransactions() {
    const { token, logout } = React.useContext(AuthContext)

    return useQuery('transactions', () =>
        fetch('/api/transaction', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.json())

            .catch(e => {

                if (e.response.status === 401) logout();

                throw new Error(e)
            })
    )
}


//core
import React from 'react';
import { useQuery } from 'react-query';

//context
import { AuthContext } from '../../context/AuthContext'

export default function useStatisticsExpenses() {
    const { token, logout } = React.useContext(AuthContext);

    return useQuery('expenses', () =>

        fetch('/api/transaction/expenses', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.json())

            .catch(e => {

                if (e.response.status === 401) logout();

                throw new Error(e)
            })
    )
}

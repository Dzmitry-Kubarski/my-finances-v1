//core
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

//context
import { AuthContext } from '../context/AuthContext'

export default function useStatisticsExpenses() {
    const { token, logout } = React.useContext(AuthContext);

    return useQuery('expenses', () =>

        axios.get('/api/link/expenses', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.data)

            .catch(e => {

                if (e.response.status === 401) logout();

                throw new Error(e)
            })
    )
}


import React from 'react';
import { useQuery } from 'react-query'
import axios from 'axios'
import { AuthContext } from '../../src/context/AuthContext'

export default function useStatistics() {

    const { token, logout } = React.useContext(AuthContext);

    return useQuery('statistics', () =>

        axios.get('/api/link/statistics', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.data)

            .catch(e => {

                if (e.response.status === 401) logout();

                throw new Error(e)
            })
    )
}

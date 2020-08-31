//core
import React from 'react';
import { useQuery } from 'react-query';

//context
import { AuthContext } from '../../context/AuthContext'

export default function useStatisticsRevenue() {
    const { token, logout } = React.useContext(AuthContext);

    return useQuery('revenue', () =>

        fetch('/api/transaction/revenue', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return logout()
            })

            .catch(e => {
                throw new Error(e)
            })
    )
}

// core
import React from 'react';
import { useQuery } from 'react-query';

// context
import { AuthContext } from '../../context/AuthContext';

export default function useSource(sourceId) {
    const { token, logout } = React.useContext(AuthContext);

    return useQuery('source', () =>
        fetch(`/api/sources/${sourceId}`, { headers: { Authorization: `Bearer ${token}` } })
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
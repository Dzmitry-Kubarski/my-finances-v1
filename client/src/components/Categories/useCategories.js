//core
import React from 'react';
import { useQuery } from 'react-query';

//context
import { AuthContext } from '../../context/AuthContext';


export default function useCategories() {
    const { token, logout } = React.useContext(AuthContext);

    return useQuery('categories', () =>
        fetch('/api/categories', { headers: { Authorization: `Bearer ${token}` } })
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


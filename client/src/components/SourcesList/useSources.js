//core
import React from 'react';
import { useQuery } from 'react-query';

//context
import { AuthContext } from '../../context/AuthContext';


export default function useSources() {
    const { token } = React.useContext(AuthContext);

    return useQuery('sources', () =>
        fetch('/api/sources', { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.json())

            .catch(e => {
                throw new Error(e)
            })
    )
}

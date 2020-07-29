
import React from 'react';

import { useQuery } from 'react-query'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

export default function useSources() {
    const { token } = React.useContext(AuthContext)

    return useQuery('sources', () =>
        axios.get('/api/sources', { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data)
    )
}


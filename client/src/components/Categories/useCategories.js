import React from 'react';
import { useQuery } from 'react-query'
import { queryCache } from 'react-query'

import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'

export default function useCategories() {
    const { token } = React.useContext(AuthContext)

    return useQuery('categories', () =>
        axios.get('/api/categories', { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data)

            .catch(e => {
                throw new Error(e)
            })
    )

}


// core
import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios'

// context
import { AuthContext } from '../context/AuthContext'

export default function useSource(sourceId) {
    const { token } = React.useContext(AuthContext)

    return useQuery('source', () =>
        axios.get(`/api/sources/${sourceId}`, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.data)

            .catch(e => {
                throw new Error(e)
            })
    )
}
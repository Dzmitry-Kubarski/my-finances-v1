// core
import React from 'react'
import { useQuery } from 'react-query';
import axios from 'axios'

// context
import { AuthContext } from '../../context/AuthContext'

export default function useCategory(categoryId) {
    const { token } = React.useContext(AuthContext)

    return useQuery('category', () =>
        axios.get(`/api/categories/${categoryId}`, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.data)

            .catch(e => {
                throw new Error(e)
            })
    )
}
// core
import React from 'react'
import { useQuery } from 'react-query';

// context
import { AuthContext } from '../../context/AuthContext'

export default function useCategory(categoryId) {
    const { token } = React.useContext(AuthContext)

    return useQuery('category', () =>
        fetch(`/api/categories/${categoryId}`, { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.json())

            .catch(e => {
                throw new Error(e)
            })
    )
}
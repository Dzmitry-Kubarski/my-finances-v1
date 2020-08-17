// core
import React from 'react'
import axios from 'axios'
import { useMutation, queryCache } from 'react-query'

// context
import { AuthContext } from '../../context/AuthContext'

export default function useDeleteCategory() {
    const { token } = React.useContext(AuthContext)

    return useMutation(
        (categoryId) => axios.delete(`/api/categories/delete/${categoryId}`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data),

    )
}
// core
import React from 'react'
import axios from 'axios'
import { useMutation, queryCache } from 'react-query'

// context
import { AuthContext } from '../../context/AuthContext'

export default function useDeleteSource() {
    const { token } = React.useContext(AuthContext)

    return useMutation(
        (sourceId) => axios.delete(`/api/sources/${sourceId}`, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data),

    )
}
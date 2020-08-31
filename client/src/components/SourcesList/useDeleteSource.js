// core
import React from 'react';
import { useMutation } from 'react-query';

// context
import { AuthContext } from '../../context/AuthContext';

export default function useDeleteSource() {
    const { token, logout } = React.useContext(AuthContext);

    return useMutation(
        (sourceId) => fetch(`/api/sources/delete/${sourceId}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } })
            .then((res) => {
                if (res.ok) {
                    return res.data
                }
                return logout()
            })

            .catch(e => {
                throw new Error(e)
            })
    )
}
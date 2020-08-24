// core
import React from 'react';
import { useMutation } from 'react-query';

// context
import { AuthContext } from '../../context/AuthContext';

export default function useDeleteCategory() {
    const { token } = React.useContext(AuthContext);

    return useMutation(
        (categoryId) => fetch(`/api/categories/delete/${categoryId}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } })
            .then((res) => res.data)

            .catch(e => {
                throw new Error(e)
            })

    )
}
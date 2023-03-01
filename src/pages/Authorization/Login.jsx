import React from 'react';
import { useFetch } from 'hooks';
export default function Login() {

    const onFailure = React.useCallback((error) => {
        console.log(error, "---error ")
    }, [])

    const onSuccess = React.useCallback((response) => {
        console.log(response, "---success ")
    }, [])

    const { isLoading, data, callFetch } = useFetch({
        url: '/posts/1',
        skipOnStart: false,
        method: 'get',
        onSuccess,
        onFailure
    })

    const refetch = React.useCallback(() => {
        callFetch({
            url: '/posts',
            method: 'POST',
            data: {
                title: 'foo',
                body: 'bar',
                userId: 1,
            }
        })
    }, [callFetch])



    console.log(isLoading, "---", data)

    return (
        <div>
            <button onClick={refetch}>clikc</button>
        </div>
    )
}
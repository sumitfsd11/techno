import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AfterLoginHeader() {
    const session = false

    return (
        <div>
            <Outlet />
        </div>
    )
}

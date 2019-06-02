import React from 'react'

const UserRecord = props => (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>E-mail</th>

        </tr>
        </thead>
        <tbody>
        {props.users.length > 0 ? (
            props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={3}>No Record</td>
            </tr>
        )}
        </tbody>
    </table>
)

export default UserRecord
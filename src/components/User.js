import React from 'react'

function User({user}) {
    return (
        <div>
             <table class="table">
  <thead>
    <tr>
      <th scope="col">FirstName</th>
      <th scope="col">Last Name</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.password}</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default User

import React, {Component} from 'react';
import UserItem from "./UserItem";
import spinner from "../layout/spinner.gif";
import PropTypes from 'prop-types';

const Users = ({ users, loading}) => {
    if(loading) {
    return <spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem user={user} key={user.id}/>
                ))}
            </div>
        );
    }
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

    const userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem'
    };

export default Users;
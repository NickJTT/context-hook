import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { ChannelContext } from '../../context/ChannelContext';

function ComponentF() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <React.Fragment>
            <p>User: { user }<br/>Channel: { channel }</p>
        </React.Fragment>
    );
}

export default ComponentF;

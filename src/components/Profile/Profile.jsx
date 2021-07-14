import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    username: {
        marginLeft: 10,
        marginRight: 10,
    }

}))
const Profile = () => {
    const classes = useStyles();
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className={classes.username}>
                <h6>{user.name}</h6>
            </div>
        )
    );
};

export default Profile;
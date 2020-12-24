import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from './axios';

function App() {
    const responseSuccessGoogle = (response) => {
        console.log(response);
        axios({
            method: "POST",
            url: "http://localhost:8000/api/googlelogin",
            data: { tokenId: response.tokenId }


        }).then(response => {
            console.log("Google Login Success", response);
        })
    }


const responseErrorGoogle = (response) => {

}

    return (
        <View style={styles.App}>
            <View>
                <Text> Login With Google </Text>

                <GoogleLogin
                    clientId=""
                    buttonText="Login with Google"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseErrorGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </View>
        </View>


    );
}


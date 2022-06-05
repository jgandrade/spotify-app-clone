import React from 'react';
import styled from 'styled-components';
import './login.css'


function Login() {

    const handleClick = () => {
        const clientId = process.env.REACT_APP_CLIENT_ID;
        const redirectUrl = process.env.REACT_APP_REDIRECT_URI;
        console.log(clientId, "+", redirectUrl)
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const scopes = [
            'user-read-email',
            'user-read-private',
            'user-modify-playback-state',
            'user-read-playback-state',
            'user-read-currently-playing',
            'user-read-recently-played',
            'user-read-playback-position',
            'user-top-read'
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;
    };

    return (
        <Container className="container-login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green-768x231.png" alt="spotify clone"></img>
            <a onClick={handleClick}>Connect to Spotify</a>
        </Container>
    )
}

const Container = styled.div``;
export default Login
import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main";
import {loadReports} from "./api/reports";
import {useStore} from "./store/useStore";

function App() {
    const { dispatch } = useStore();
    useEffect(()=>{
        loadReports().then(data=>{
            dispatch({type: 'loadReports', data});
        });
    }, []);
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Container>
                <Main/>
            </Container>
        </>
    );
}

export default App;

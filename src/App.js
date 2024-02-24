import React,{useState,useEffect} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {ErrorProvider} from "./contexts/ErrorContext";
import {UserProvider} from "./contexts/UserContext";
import Icon from "./components/Text/Icon";
import Text from "./components/Text/Text";
import Authenticated from "./layouts/Authenticated";
import Guest from "./layouts/Guest";
import Submit from "./pages/Submit";
import Result from "./pages/Result";
import Login from "./pages/Login";
import {MetaMaskProvider} from "@metamask/sdk-react";
import {useSDK} from '@metamask/sdk-react'
import backgroundImage from "./assets/bg-1.jpg";
import Loading from "./pages/Loading";


function App() {
  const [error,setError]=useState('')
  const {sdk,connected,connecting,provider,chainId,account,balance}=useSDK();

  useEffect(() => {
    console.log('accounts',connected,connecting,);
  },[connected,connecting,]);

  const connect=async () => {
    try {
      await sdk?.connect();
    } catch(err) {
      console.warn("failed to connect..",err);
    }
  };

  return (
    <ErrorProvider value={[setError]}>
      <UserProvider value={[account,connect,connected,connecting,provider]}>
        {error.length>0&&<div className={`fixed flex items-center justify-start rounded-lg shadow-md bottom-5 right-2 left-2 bg-light lg:top-4 lg:bottom-auto lg:right-4 lg:left-auto z-50 transition-position ${error.length>0? 'bottom-5 lg:right-4':'-bottom-64 lg:-right-64'}`}>
          <div className='h-full px-4 py-2 rounded-l-lg bg-danger'>
            <Icon icon='exclamation-circle-fill' className='inline text-xl text-light' />
          </div>
          <Text className='inline pl-3 pr-4'>
            {error}
          </Text>
          <div className='m-2' onClick={() => {
            setError('')
          }}>
            <Icon icon='x' className='text-lg cursor-pointer' />
          </div>
        </div>}
        <div className="relative w-full h-screen min-h-screen bg-cover App bg-light" style={{backgroundImage: `url(${backgroundImage})`}}>
          <BrowserRouter>
            <Routes>
              <Route element={<Authenticated />} >
                <Route path='/submit' element={<Submit />} />
                <Route path='/result' element={<Result />} />
              </Route>
              <Route element={<Guest />} >
                <Route path='*' element={<Login />} />
              </Route>
              <Route path='/loading' element={<Loading />} />
            </Routes>
          </BrowserRouter>
        </div>
      </UserProvider>
    </ErrorProvider>
  );
}

export default App;

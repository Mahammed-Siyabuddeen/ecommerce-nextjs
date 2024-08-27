import { googleAuth } from '@/Services/googleAuth.services';
import { setUser } from '@/features/authSlice';
import { AppDispatch, RootState } from '@/features/redux/store';
import { CredentialResponse,GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const GoogleLoginComponent = () => {
    const Dispatch = useDispatch<AppDispatch>()
    const router=useRouter()
    const user = useSelector((state: RootState) => state.user)

    const handleAuthSuccess = (credentialResponse: CredentialResponse) => {
        if (!credentialResponse.clientId || !credentialResponse.credential)
            return

        googleAuth(
            {
                data: { clientId: credentialResponse.clientId, credential: credentialResponse.credential }
            }
        ).then(({data})=>{
                Dispatch(setUser({...data}));
                router.push('/');
                
        }).catch((err)=>{
            console.log(err);
            
        })


    }
  return (
    <GoogleOAuthProvider  clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
    <GoogleLogin 
        onSuccess={(credentialResponse: CredentialResponse) => handleAuthSuccess(credentialResponse)}
        onError={() => console.log('error in google auth')}
    >

    </GoogleLogin>
</GoogleOAuthProvider>
  )
}

export default GoogleLoginComponent
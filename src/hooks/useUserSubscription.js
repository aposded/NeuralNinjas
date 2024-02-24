import {getAuth} from 'firebase/auth'

export default function useUserSubscription() {

    const auth=getAuth()

    function getIsPremium() {
        return auth.currentUser.getIdTokenResult(true).then((result) => {
            if(result.claims.stripeRole==='premium') {
                return true
            }
            return false
        })
    }
    return getIsPremium
}

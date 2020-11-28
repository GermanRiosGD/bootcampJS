import { useAuth } from "../hook/authHook"

export const Consumer = () => {
    const auth = useAuth()

    return auth.user 
    ? <h1>Wellcome {auth.user}</h1>
    : <h1></h1>
}
import { useContext } from 'react';
import Component3 from './Component3'
import { UserContext } from '../App';
function Component2() {
    const user = useContext(UserContext)
    return (
        <>
            <h1>{`Hello ! ${user}`}</h1>
            <Component3 ></Component3>

        </>
    )
}
export default Component2;
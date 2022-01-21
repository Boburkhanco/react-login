import useAuth from "../Hook/useAuth"

function About() {

    const [token, setToken] = useAuth()

    return(
        <>
            <h1>About</h1>

            <button
                title="Double click on button !"
                onDoubleClick={() => setToken(null)}
            >LogOut</button>
        </>
    )
}

export default About
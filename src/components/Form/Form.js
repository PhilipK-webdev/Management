import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import S from './styles';
import { useUserContext } from "../../hooks/useUserContext";
import { ReactComponent as ReactLogo } from '../../assets/oval.svg';
function Form() {
    const [password, setPasswod] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [dataObjects, setters] = useUserContext();

    useEffect(() => {
        const { cookie } = dataObjects;
        console.log(cookie)
        cookie ? navigate("/info") : navigate("/")
    }, [])

    const submitForm = async (e) => {
        e.preventDefault();
        const regexEmail = /\S+@\S+\.\S+/;
        if ((/[A-Z]/.test(password)
            && /[0-9]/.test(password)
            && password.length >= 8
            && password.length <= 15) && regexEmail.test(email)) {
            setEmail("");
            setPasswod("");
            setIsLoading(true);
            try {
                const response = await fetch('https://private-052d6-testapi4528.apiary-mock.com/authenticate', {
                    method: 'POST', headers: {
                        'Content-Type': 'application/json'
                    }, body: JSON.stringify({ password, email })
                });
                if (response.ok) {
                    const { setUser, updateCookie } = setters;
                    const userInfo = await response.json();
                    const { token, personalDetails } = userInfo[0];
                    setUser(personalDetails);
                    updateCookie(token, 1)
                    setIsLoading(false);
                    navigate("/info");
                }
            } catch (error) {
                // ERROR status code 404
            }
        } else {
            console.log("ERROR")
        }
    }

    return (
        <S.Container>
            <S.Card>
                <S.Titel>Good to see you again</S.Titel>
                <S.Form onSubmit={submitForm}>
                    <S.Label htmlFor='email'>Enter email</S.Label>
                    <S.Email
                        value={email}
                        type="email"
                        placeholder='e.g zigit@zigit.com'
                        id='email'
                        required
                        onBlur={() => console.log("BLUR")}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <S.Label htmlFor='passowrd'>Enter password</S.Label>
                    <S.Password
                        value={password}
                        type="password"
                        placeholder='e.g Demo1235!'
                        id='password'
                        required
                        onChange={(e) => setPasswod(e.target.value)}
                    />

                    <S.Submit type="submit" isLoading={isLoading}>Login
                        {isLoading && <ReactLogo />}
                    </S.Submit>
                </S.Form>
            </S.Card>
        </S.Container>
    )
}

export default Form
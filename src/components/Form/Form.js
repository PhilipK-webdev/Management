import React from 'react'
import S from './styles';
function Form() {
    return (
        <S.Container>
            <S.Card>
                <S.Titel>Good to see you again</S.Titel>
                <S.Form>

                    <S.Label>Enter email</S.Label>
                    <S.Email type="email" placeholder='e.g zigit@zigit.com' />
                    <S.Label>Enter password</S.Label>
                    <S.Password type="password" placeholder='e.g Demo1235!' />
                    <S.Submit>Login In</S.Submit>
                </S.Form>
            </S.Card>
        </S.Container>
    )
}

export default Form
import React, { useEffect, useState } from 'react'
import S from './styles';
import { useUserContext } from "../../services/UserContext";
const OPTIONS = ['madeDadeline', 'name', 'score']
function Main() {
    const [dataObjects, setters] = useUserContext();
    const [data, setData] = useState([]);
    const [selectSort, setIsSelectSort] = useState('');
    useEffect(() => {
        const { cookie } = dataObjects;
        fetchData(cookie);
    }, [])

    const fetchData = async (token) => {
        const response = await fetch('https://private-052d6-testapi4528.apiary-mock.com/info', {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
        });
        if (response.ok) {
            const resolveData = await response.json();
            setData(resolveData);
            console.log(resolveData);
        }
    }
    return (
        <S.Container>
            <S.UserInfo>

            </S.UserInfo>
            <S.UserStats>
                <S.Filter type="text" placeholder='filter by project' />
                <S.Select name="filterStatus" onChange={(e) => setIsSelectSort(e.target.value)}>
                    <option value="" />
                    {OPTIONS.map((select, index) => {
                        return <option key={index} value={select} >{select}</option>
                    })}
                </S.Select>
            </S.UserStats>
        </S.Container>
    )
}

export default Main
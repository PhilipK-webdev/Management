import React, { useEffect, useState } from 'react'
import S from './styles';
import { useUserContext } from "../../hooks/useUserContext";
import TableUserInfo from '../Table/TableUserInfo';
import { useNavigate } from "react-router";
const OPTIONS = ['madeDadeline', 'name', 'score'];
const HEADER_USER_INFO = ['Team', 'Avatar', 'Name', 'JoinedAt'];
const HEADER_USER_STATS = ['Name', 'Score', 'DurationInDays', 'BugsCount', 'MadeDadeline'];
function Main() {
    const [dataObjects, setters] = useUserContext();
    const [data, setData] = useState([]);
    const [selectSort, setIsSelectSort] = useState('');
    const [filterItem, setFilterItem] = useState('');
    const { cookie, user } = dataObjects;
    const navigate = useNavigate();
    useEffect(() => {
        cookie ? fetchData(cookie) : navigate("/")
    }, [])

    const fetchData = async (token) => {
        try {
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
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <S.Container>
            <S.UserInfo>
                <S.Title>User Stats</S.Title>
                <TableUserInfo HEADER={HEADER_USER_INFO} information={[user]} />
            </S.UserInfo>
            <S.UserStats>
                <S.Box>
                    <S.Filter type="text" value={filterItem}
                        placeholder='filter by project'
                        onChange={(e) => setFilterItem(e.target.value)}
                    />
                    <S.Select name="filterStatus" onChange={(e) => setIsSelectSort(e.target.value)}>
                        <option value="" />
                        {OPTIONS.map((select, index) => {
                            return <option key={index} value={select} >{select}</option>
                        })}
                    </S.Select>
                </S.Box>
                <TableUserInfo HEADER={HEADER_USER_STATS} information={data} />
            </S.UserStats>
        </S.Container>
    )
}

export default Main
import React, { useEffect, useState } from 'react'
import S from './styles';
import { useUserContext } from "../../hooks/useUserContext";
import TableUserInfo from '../Table/TableUserInfo';
import { useNavigate } from "react-router";
import Alert from '@mui/material/Alert';
const OPTIONS = ['madeDadeline', 'name', 'score'];
const HEADER_USER_INFO = ['Team', 'Avatar', 'Name', 'JoinedAt'];
const HEADER_USER_STATS = ['Name', 'Score', 'DurationInDays', 'BugsCount', 'MadeDadeline'];
function Main() {
    const [dataObjects, setters] = useUserContext();
    const [data, setData] = useState([]);
    const [mockDataFilter, setMockDataFilter] = useState([])
    const [selectSort, setIsSelectSort] = useState('');
    const [filterItem, setFilterItem] = useState('');
    const [averageProject, setAverageProject] = useState([]);
    const [uniqueName, setUniqueName] = useState([]);
    const [caugthError, setCaugthError] = useState("")
    const { cookie, user } = dataObjects;
    const navigate = useNavigate();
    useEffect(() => {
        cookie ? fetchData(cookie) : navigate("/")
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            const unique = [...new Set(data.map(item => item.name))];
            setUniqueName(unique)
            const objectAverageProjects = {};
            unique.forEach((item, indexItem) => {
                let score = 0;
                let count = 0;
                let totalCount = 0;
                data.forEach((info, indexInfo) => {
                    if (item === info.name && info.madeDadeline) {
                        score += info.score;
                        count++;
                    }
                    if (item === info.name) {
                        totalCount++;
                    }
                })
                objectAverageProjects[item] = [(score / count).toFixed(2), { average: ((count / totalCount) * 100).toFixed(2) }];
            })
            setAverageProject([objectAverageProjects])
        }
    }, [data])

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
                setMockDataFilter(resolveData);
            } else {
                setCaugthError(response.status.toString());
            }
        } catch (error) {
            setCaugthError(error.toString());
        }
    }

    const sortProject = (e) => {
        const { value } = e.target;
        const copyData = [...data];
        setFilterItem(value)
        let filteredProject = [];
        copyData.forEach((item, index) => {
            if (item.name.toLowerCase().startsWith(e.target.value.toLowerCase())) {
                filteredProject.push(item)
                setData(filteredProject);
            }
        })
        if (!value) {
            setData(mockDataFilter)
        }
    }
    const filterProject = (e) => {
        const { value } = e.target;
        setIsSelectSort(value);
        const copyData = [...data]
        const sortArray = copyData.sort(function (a, b) {
            return a[value] < b[value] ? 1 : a[value] === b[value] ? 0 : -1;
        });
        setData(sortArray);
        if (!value) {
            setData(mockDataFilter);
        }
    }
    return (
        <>
            {caugthError && <S.Alert>
                <Alert severity="error">{caugthError}</Alert>
            </S.Alert>}
            <S.Container>
                <S.UserInfo>
                    <><S.Title>User Stats</S.Title>
                        <TableUserInfo HEADER={HEADER_USER_INFO} information={[user]} />
                    </>
                    <S.Card>
                        <S.Title>Information</S.Title>
                        <S.Info>
                            {uniqueName.length > 0 && uniqueName.map((project, indexProject) => {
                                return <S.InfoSection key={indexProject}>Average {project}
                                    :{averageProject[0][uniqueName[indexProject]][0]}
                                    <br />
                                    {averageProject[0][uniqueName[indexProject]][1].average}% of the projects made the deadline
                                </S.InfoSection>
                            })}
                        </S.Info>
                    </S.Card>
                </S.UserInfo>
                <S.UserStats>
                    <S.Box>
                        <S.Filter
                            disabled={selectSort ? true : false}
                            type="text"
                            value={filterItem}
                            placeholder='filter by project'
                            onChange={sortProject}
                        />
                        <S.Select name="filterProject" onChange={filterProject} disabled={filterItem ? true : false}>
                            <option value="" />
                            {OPTIONS.map((select, index) => {
                                return <option key={index} value={select} >{select}</option>
                            })}
                        </S.Select>
                    </S.Box>
                    <TableUserInfo HEADER={HEADER_USER_STATS} information={data} />
                </S.UserStats>
            </S.Container>
        </>
    )
}

export default Main
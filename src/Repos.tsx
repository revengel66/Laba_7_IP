import React from 'react'; // Подключение react.
import { useEffect } from "react";
import { useState } from 'react'; 
import './App.css';
import { Card, CardContent, Typography } from '@mui/material';

interface GithubRepo{
	name: string;
	describtion: string;
	html_url: string;
}
const getData = async () => {
	return await fetch(`https://api.github.com/users/vladdy-moses/repos`)
	.then(res => res.json())
	.then((res: GithubRepo[]) => {
		return res;
	})
};

interface ReposProps {
    name: string;
    describtion: string;
    link: string;
}
const [infoData, setData] = useState<GithubRepo[]>([]);

	useEffect(() => {
	  getData().then((res) => {
		setData(res);
	  });
	}, []);

var Repos = (props: ReposProps) => {
    var [name] = useState(props.name);  // И используем. Значение по умолчанию - 0.
    var [describtion] = useState(props.describtion);
    var [link] = useState(props.link);
    return(
        <Card component="div" sx={{textDecoration:'none'}}>
            <CardContent>
                <Typography variant="h6" component="h6" sx={{fontWeight:'bold', mb:'10px'}}>
                    {name}
                </Typography>
                <Typography component="div" sx={{fontSize:'16px', }}>
                    Описание репозитория:{describtion}
                </Typography>
                <Typography component="div" sx={{fontSize:'16px', }}>
                    Ссылка на репозиторий: {link}
                </Typography>
            </CardContent>
        </Card>
        
    );
};
export default Repos;
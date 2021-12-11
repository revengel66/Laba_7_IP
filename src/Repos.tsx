import React from 'react'; // Подключение react.
import { useEffect } from "react";
import { useState } from 'react'; 
import './App.css';
import { Card, CardContent, Typography } from '@mui/material';

interface ReposProps {
    name: string;
    description: string;
    link: string;
}
var Repos = (props: ReposProps) => {
    var [name] = useState(props.name);  // И используем. Значение по умолчанию - 0.
    var [description] = useState(props.description);
    var [link] = useState(props.link);
    return(
        <Card component="div" sx={{textDecoration:'none'}}>
            <CardContent>
                <Typography variant="h6" component="h6" sx={{fontWeight:'bold', mb:'10px'}}>
                    {name}
                </Typography>
                <Typography component="div" sx={{fontSize:'16px', }}>
                    Описание репозитория:{description}
                </Typography>
                <Typography component="div" sx={{fontSize:'16px', }}>
                    Ссылка на репозиторий: {link}
                </Typography>
            </CardContent>
        </Card>
        
    );
};
export default Repos;
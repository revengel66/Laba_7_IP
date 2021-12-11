import React from 'react';
import { useEffect } from "react";
import { useState } from 'react'; 
import './App.css';
import { Box, AppBar, Toolbar, Typography, Button, Container, Card, CardContent, CardMedia } from '@mui/material';
import Repos from './Repos'
const pages = ['Главная', 'Цены', 'Услуги','Контакты','+7(123)-456-78-90'];
interface GithubRepo{
	name: string;
	description: string;
	html_url: string;
}
const getData = async () => {
	return await fetch(`https://api.github.com/users/vladdy-moses/repos`)
	.then(res => res.json())
	.then((res: GithubRepo[]) => {
		return res;
	})
};
function App(): JSX.Element {
	
	const [infoData, setData] = useState<GithubRepo[]>([]);

	useEffect(() => {
	  getData().then((res) => {
		setData(res);
	  });
	}, []);


  return (
    <Box>
		<Box sx={{
			backgroundImage: 'url(/images/back-header.png)', backgroundSize: 'cover'
		}}>
			<AppBar sx={{
			pt: '20px', pb: '20px', background: 'transparent', boxShadow: 'none', position:'relative'
			}}>
				<Container>
					<Toolbar>
						<Box sx={{width: 150}}  component="a" href="#">
							<Box sx={{ maxWidth: "100%" }} component="img" src="/images/logo.png" alt="logo"></Box>
						</Box>
						<Box sx={{ flexGrow: 0, display: "flex", justifyContent: 'flex-end', width: "100%" }}>
							{pages.map((page) => (
							<Button
								key = {page}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page}
							</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box sx={{
				height: '600px',
				display: 'flex',
				alignItems: 'center'}
			}>
				<Box sx={{
					color: '#fff',
					width: '70%',
					margin: '0 auto',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					textAlign: 'center'
				}}>
					<Typography variant="h2" component="h1" sx={{fontWeight:'bold', mb:'50px'}}>
						Качественный стайлинг для Вашего автомобиля в Ульяновске
					</Typography>
					<Box>
						<Button variant="outlined" sx={{color:'#fff', borderColor:'#fff', mr:'10px'}}>Наши услуги</Button>
						<Button variant="outlined" sx={{color:'#fff', borderColor:'#fff'}}>О нас</Button>
					</Box>
				</Box>
			</Box>
		</Box>
		<Box sx={{pt:'100px', pb:'100px'}}>
			<Container>
				<Typography variant="h3" component="h2" sx={{textAlign:'center', mb:'50px'}}>
					Наши услуги
				</Typography>
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
					gridGap: '30px'
				}}>
					<Card component="a" href="#" sx={{textDecoration:'none'}}>
						<CardMedia
							component="img"
							height="200px"
							image="/images/s1.png"
							alt="Тонировка стёкол"
						/>
						<CardContent>
							<Typography variant="h6" component="h6" sx={{fontWeight:'bold', mb:'10px'}}>
								Тонировка стёкол
							</Typography>
							<Typography component="div" sx={{fontSize:'16px', }}>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Typography>
						</CardContent>
					</Card>
					<Card component="a" href="#" sx={{textDecoration:'none'}}>
						<CardMedia
							component="img"
							height="200px"
							image="/images/s2.png"
							alt="Полировка кузова"
						/>
						<CardContent>
							<Typography variant="h6" component="h6" sx={{fontWeight:'bold', mb:'10px'}}>
								Тонировка стёкол
							</Typography>
							<Typography component="div" sx={{fontSize:'16px', }}>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Typography>
						</CardContent>
					</Card>
					<Card component="a" href="#" sx={{textDecoration:'none'}}>
						<CardMedia
							component="img"
							height="200px"
							image="/images/s3.png"
							alt="Оклейка автомобиля"
						/>
						<CardContent>
							<Typography variant="h6" component="h6" sx={{fontWeight:'bold', mb:'10px'}}>
								Тонировка стёкол
							</Typography>
							<Typography component="div" sx={{fontSize:'16px', }}>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</Typography>
						</CardContent>
					</Card>
				</Box>
			</Container>
		</Box>
		<Box>
			<Container>
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					gridGap: '30px',
					mb: '100px'
				}}>
					{infoData.map((repos, index) => (
						<Repos key={index} name={repos.name} description={repos.description} link={repos.html_url}/>
					))}

				</Box>
			</Container>
		</Box>
    </Box>
  );
}

export default App;

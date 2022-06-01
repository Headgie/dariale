import React, { useState, useEffect } from "react";
import yaml from "js-yaml";
import "../dariale.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {  faInstagram, faVk,faYoutube,faTelegram , } from '@fortawesome/free-brands-svg-icons';

import indexPic01 from "../images/index-pic01.png";
import indexPic02 from "../images/index-pic02.png";
import indexPic03 from "../images/index-pic03.png";
import indexPic04 from "../images/index-pic04.png";

const MainPage = (props) => {
	const [loading, setLoading] = useState(true);
	const [current,setCurrent] = useState("Publications")
	const [content, setContent] = useState();

	useEffect(() => {
		fetch("cms/content.yaml")
			.then((r) => r.text())
			.then((text) => {
				// console.log(text);
				setContent(yaml.load(text).content);
			})
			.catch((error) => {
				console.log(`error fetch content ${error}`);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {console.log(content? content.afisha: "")}, [loading, content]);

	return (
		<>
			{loading ? (
				<div>loading...</div>
			) : (
				<>
					<div className="item1">
						<div>
							<img src={indexPic01} alt="pic one" srcSet="" />
						</div>
						<div>
							<img src={indexPic02} alt="pic two" srcSet="" />
						</div>
					</div>
					<div className="item2">
						<div className="item2-inner">
							<div className="index-header">
									<h1>Дарья Лебедева</h1>
									<h2>кладовка воспоминаний</h2>
							</div>
							<div className="main-page">
								<div className="header-menu">
										<div className="menu-tabs"> 
												<div className="tab">
														<button className={`tablinks ${current==="Afisha"?"active":""}`} id="button_afisha" onClick={()=>{setCurrent('Afisha')}}>События</button>
														<button className={`tablinks ${current==="Publications"?"active":""}`} id="button_publications" onClick={()=>{setCurrent('Publications')}}>Публикации</button>
														<button className={`tablinks ${current==="Reviews"?"active":""}`} id="button_reviews" onClick={()=>{setCurrent('Reviews')}}>Книжные&nbsp;обзоры</button>
														<button className={`tablinks ${current==="Books"?"active":""}`} id="button_books" onClick={()=>{setCurrent('Books')}}>Книги</button>
														<button className={`tablinks ${current==="Interview"?"active":""}`} id="button_interview" onClick={()=>{setCurrent('Interview')}}>Интервью&nbsp;и&nbsp;отзывы</button>
														<button className={`tablinks ${current==="About"?"active":""}`} id="button_about" onClick={()=>{setCurrent('About')}}>Обо&nbsp;мне</button>
												</div>
										</div>
								</div>
                <div className="tabs-content">
                    <div className="tabs-content-inner">

											{current==="Afisha"?
												<div id="Afisha" className="tabcontent visible">
													<div className="allsector">
												{content.afisha.map((item,index) => (
													<div key={index} className="sector">
														<h4>{item.caption}</h4>
														<p>{item.text}</p>
													</div>
												))
												}
			
												</div>
											</div>
											:
											null}


										</div>
								</div>
							</div>
						</div>

            <div className="index-footer">
                <div className="footer-c">
                    ©2021 Студия Eisenvögel  
                </div>
                <div className="footer-icon">
                    <a href="https://www.instagram.com/andelyta/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size={'2x'}/></a>
                    <a href="https://vk.com/lebedaria" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faVk} size={'2x'}/></a>
                    <a href="https://t.me/ratdebibliotheque" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faTelegram} size={'2x'}/></a>
                    <a href="https://www.youtube.com/channel/UCao9Q6QeL-yD-j6SHp-2_xA" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faYoutube} size={'2x'}/></a>
                </div>
						</div>   
					</div>
					<div className="item3">
						<div>
							<img src={indexPic03} alt="pic three" srcSet="" />
						</div>
						<div>
							<img src={indexPic04} alt="pic four" srcSet="" />
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default MainPage;

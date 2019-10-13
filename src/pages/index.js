import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
  	<Header />	
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="Test" />
    <p>
    	Здесь будет ссылка на страницу about. Вот она: <Link to="/about">about</Link>.
    </p>
  </div>
)
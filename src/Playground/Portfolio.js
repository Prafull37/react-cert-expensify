import React from 'react';
import { BrowserRouter,Route,NavLink,Switch,Link } from "react-router-dom";



const Header=()=><header>
    <h1>PortFolio</h1>
    <p>This Portfolio</p>
</header>

const Navlinks=(props)=>(
    <div>
    <NavLink to="/" exact activeClassName="is-active">Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">PortFolio</NavLink>
    <NavLink to="/help" activeClassName="is-active">Contact</NavLink>
</div>
)
const Routes=()=>(
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/portfolio" component={PortFolio}/>
    <Route  path="/portfolio/:item" component={Item}/>

    <Route  path="/contact" component={Contact}/>
    <Route path="*" component={NotFound} />
</Switch>
)


const Home=()=><div>This is Home </div>

const Contact=()=><div>This is Contact </div>

const PortFolio=()=>(
    <div>
       <p> Porfolio Page</p>
       <div>
        <Link to="/portfolio/1">Item 1</Link>
        <Link to="/portfolio/2">Item 2</Link>
        </div>
       
    </div>
)

const Item=(props)=>{
    (props);
    return (
        <p>Item {props.match.params.item} is ready to serve</p>
    )
}

const NotFound=()=><div>404 Not FOund- <Link to="/">Go Home</Link></div>

const PlayGround=()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Navlinks/>
            <Routes/>
        </div>
    </BrowserRouter>
)

export default PlayGround;

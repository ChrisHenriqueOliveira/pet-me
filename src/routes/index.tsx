import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Works from '../pages/Works';
import AboutUs from '../pages/AboutUs';
import Stories from '../pages/Stories';
import Contact from '../pages/Contact';
import Search from '../pages/Search';
import NewPet from '../pages/NewPet';
import MyPets from '../pages/MyPets';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/newpet" exact component={NewPet} />
    <Route path="/search" exact component={Search} />
    <Route path="/mypets" exact component={MyPets} />
    <Route path="/works" exact component={Works} />
    <Route path="/aboutus" exact component={AboutUs} />
    <Route path="/stories" exact component={Stories} />
    <Route path="/contact" exact component={Contact} />
  </Switch>
);

export default Routes;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNav from './shared/TopNav';
import BoardsDashboardContainer from './dashboard/BoardsDashboardContainer';
import BoardContainer from './board/BoardContainer';
import CardContainer from './card/CardContainer';
import RegistrationForm from './dashboard/RegistrationForm';
import SessionForm from './dashboard/SessionForm';
const Application = () => {
  return (
    <div>
      <TopNav />
      { localStorage.getItem("token") ? (
        <><Switch>
          <Route path="/boards/:id" component={BoardContainer} />
          <Route path="/" exact component={BoardsDashboardContainer} />
        </Switch><Route path="/cards/:card_id" component={CardContainer} /><Route path="/cards/:card_id" component={BoardContainer} /></>
        ) : 
        <>
          <RegistrationForm /> 
          <SessionForm />
        </>
      }
    </div>
  );
};

export default Application;

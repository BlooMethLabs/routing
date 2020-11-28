import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from '../../containers/Posts/Posts';
import NewPost from '../../containers/NewPost/NewPost';
import FullPost from '../../containers/FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;

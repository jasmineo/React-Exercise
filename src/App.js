import React, { Component } from 'react';
import './App.css';

/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

const usersProfile = profiles.map((profile, i) => <li key={i}>{profile.userID}</li>)

class App extends Component {
  render() {
	return (<div>
       	{/*
        <ul>
           <h1>Movie list</h1>
          {Object.keys(movies).map(function(movie, index){
              return <li key={ index }>{movies[movie].name}</li>;
          })}
        </ul>

		<ul>
           <h1>User list</h1>
          {Object.keys(users).map(function(user, index){
              return <li key={ index }>{users[user].name}</li>;
          })}
        </ul>
        */}

      <ul>
          <h1>Users fav moview</h1>
           {profiles.map(profile => { return (
              <li key={profile.id}>
                  {users[profile.userID].name}'s favorite movie is {movies[profile.favoriteMovieID].name}.
              </li>);
            })}
      </ul>

	</div>)
	}
}

export default App;

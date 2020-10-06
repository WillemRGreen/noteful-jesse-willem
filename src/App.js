import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import NoteList from './NoteList/NoteList';
import ExpandedNotes from './ExpandedNotes/ExpandedNote';
import SideBar from './SideBar/SideBar';
import store from './store'

class App extends Component {
  state={
    notes:[],
    folders:[]
  }
  componentDidMount(){
    this.setState({notes:store.notes, folders:store.folders})
  }
  render() {
    return (
      <div className="App">
        <nav>

        </nav>
        <header>

        </header>
        <main>
          <Route 
            path= '/'
            exact
            render={(routerProps) =>
              <NoteList
                routerProps={routerProps}
                notes={this.state.notes}
              />
            } 
          />
          <Route 
            path= '/folder/:folderId'
            exact
            render={(routerProps) => {
              console.log(routerProps, routerProps.match.params.folderId)
              return <NoteList
                routerProps={routerProps}
                notes={
                  this.state.notes.filter(note => 
                    note.folderId === routerProps.match.params.folderId
                  )}
              />
            }
            } 
          />
          <Route 
            path='/note/:noteId'
            exact
            render={(routerProps) => {
              return <ExpandedNote
                routerProps={routerProps}
                notes={this.state.notes}
              />
            }}
          />

        </main>

      </div>
    )
  }

}

export default App;

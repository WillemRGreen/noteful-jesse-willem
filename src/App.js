import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import NoteList from "./NoteList/NoteList";
import ExpandedNote from "./ExpandedNotes/ExpandedNote";
import SideBar from "./SideBar/SideBar";
import store from "./store";

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };
  componentDidMount() {
    this.setState({ notes: store.notes, folders: store.folders });
  }
  render() {
    return (
      <div className="App">
        <nav></nav>
        <header></header>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => (
                <NoteList routerProps={routerProps} notes={this.state.notes} />
              )}
            />
            <Route
              path="/folder/:folderId"
              exact
              render={(routerProps) => {
                return (
                  <NoteList
                    routerProps={routerProps}
                    notes={this.state.notes.filter(
                      (note) =>
                        note.folderId === routerProps.match.params.folderId
                    )}
                  />
                );
              }}
            />
            <Route
              path="/note/:noteId"
              exact
              render={(routerProps) => {
                console.log(routerProps);
                return (
                  <ExpandedNote
                    routerProps={routerProps}
                    note={this.state.notes.find(
                      (note) => note.id === routerProps.match.params.noteId
                    )}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

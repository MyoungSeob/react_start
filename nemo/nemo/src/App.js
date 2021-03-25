import React from "react";
import {BrowserRouter} from "react-router-dom";
import { Route } from 'react-router';
import {firestore} from "./firebase"
import {Grid} from "./Styles";
import Main from "./Main";
import Write from "./Write";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  
  }
componentDidMount() {
  const calender = firestore.collection("todolist");
  calender.doc("todolist").get().then((doc) => {
    if(doc.exists){
      console.log(doc.data());
    }
  })

  calender.get().then((docs) => {
    let calendar_data = [];
    docs.forEach((doc) =>{
      console.log(doc);
      console.log(doc.data());
      console.log(doc.id);

      if(doc.exists) {
        calendar_data = [...calendar_data, {id: doc.id, ...doc.data()}]
      }
    })
  })
}
render(){
  return (
    <Grid is_root bg="#ddd">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/write" exact component={Write} />
      </BrowserRouter>
    </Grid>
  );
}
}
export default App;

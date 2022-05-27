import React, {Component} from 'react'
import Form from './Form';
import Typography from '@mui/material/Typography';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastTranslations: [],
      data: new Map()
    };
  }

  componentDidMount() {
    // const url = 'https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation'
    // let data = []
    // fetch(url)
    //     .then((result) => result.json())
    //     .then((result) => {
    //           let map = new Map;
    //           let dat = result["translation"]
    //           // console.log(dat)
    //           for(let item in dat){
    //             // console.log("ITEM = " + item);
            
    //             for(let property in dat[item]){
    //                 // console.log(dat[item]["name"]);
    //                 map.set(item, dat[item]["name"]);
    //             }
    //             // console.log(map)
    //           this.setState({
    //             data: map
    //           })
    //           console.log(map)
    //         }
    //     })

    const url = 'http://localhost:7071/api/translations/list'
    fetch(url)
        .then((result) => result.json())
        .then((result) => {
          this.setState({
            pastTranslations: result
          })
              // let dat = result["translation"]
              // result.forEach(element => {
              //   console.log(element['trStr'])
              // });
        })
  }

  render() {
    const {data} = this.state
    // console.log(data)
    // console.log(this.state.data.values)
    
  // console.log(map)
  
        // console.log(typeof(data))
    // return <div><pre>{JSON.stringify(data, null, 2)}</pre></div>

  //   let translations = data.length > 0
	// 	&& data.map((item, i) => {
	// 	return (
	// 		<option key={i} value={item.id}>{item.name}</option>
	// 	)
	// }, this);

    if (this.state.pastTranslations.size == 0) {
      console.log("null")
      return null;
    } 
    else {
      return (
        <div>
          <Typography variant="h2" component="div" style={{"textAlign": "center", paddingTop:20}}>
                      Microsoft Translation
          </Typography>
          <div style={{padding:100}}>
            <Form pastTr={this.state.pastTranslations}/>
          </div>
        </div>
      )
    }
  }
}

export default App
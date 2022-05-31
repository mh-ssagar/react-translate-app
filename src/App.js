import React, {Component} from 'react'
import Form from './Form';
import Typography from '@mui/material/Typography';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastTranslations: [],
      data: new Map(),
      translatedText: "Translation"
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

  handleSubmit = (submitted) => {
    const axios = require('axios').default;   
    const { v4: uuidv4 } = require('uuid');
    
    const url =
    'https://api.cognitive.microsofttranslator.com'
    const key = 'a3fca9113839425ba80df984e3950ae1'
    // console.log(Object.values(this.state.translateText).join())
    let x = ""
    if (submitted.trFrom !== "1") {
      x = submitted.trFrom
    }
    console.log(submitted.trFrom)
    axios({
        baseURL: url,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': key,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': x,
            'to': submitted.trTo
        },
        data: [{
            'text': submitted.translateText
        }],
        responseType: 'json'
    }).then((response) => {
    // console.log((response.data));
    // console.log(this)
        this.setState({
            translatedText: response.data["0"]["translations"]["0"]["text"]
        })
        console.log(response.data)
    })

    const url1 = 'http://localhost:7071/api/save/' + submitted.translateText;
    fetch(url1)
        .then((result) => {
            console.log(result)
        })

    const url2 = 'http://localhost:7071/api/translations/list'
    fetch(url2)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
              pastTranslations: result
            })
        })        
  }

  render() {
    const {data} = this.state


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
          <div style={{padding:20}}>
            <Form pastTr={this.state.pastTranslations} handleSubmit={this.handleSubmit} translatedText={this.state.translatedText}/>
          </div>
        </div>
      )
    }
  }
}

export default App
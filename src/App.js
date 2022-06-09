import React, {Component} from 'react'
import Form from './Form';
import Typography from '@mui/material/Typography';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import * as microsoftTeams from "@microsoft/teams-js";


const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pastTranslations: [],
      data: new Map(),
      translatedText: "Translation",
      translateText:""
    };
    this.sttFromMic = this.sttFromMic.bind(this);

  }

  componentDidMount() {
    microsoftTeams.app.initialize();
    microsoftTeams.app.getContext().then((context) => {
      // this.setState({
      //   context: context
      // });
      console.log("context")
      console.log(context)
    });
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

    // const url = 'http://localhost:7071/api/translations/list'
    const url ='https://ssagarcosmosdbfunc.azurewebsites.net/api/translations/list?'
    fetch(url)
        .then((result) => result.json())
        .then((result) => {
          this.setState({
            pastTranslations: result
          })
        })
  }

  handleTranslateToChange = (val) => {
      this.setState({
          translateText: val
      })
  }

  async sttFromMic(submitted) {
    const axios = require('axios').default;  
    const headers = { 
        headers: {
            'Ocp-Apim-Subscription-Key': 'b59410e65b2745b39b17531c35cc4268',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    try {
        const tokenResponse = await axios.post(`https://eastus.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, headers);
    

    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenResponse.data, "eastus");
    speechConfig.speechRecognitionLanguage = 'en-us';
    
    const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

    console.log('speak into your microphone...')
    recognizer.recognizeOnceAsync(result => {
        let displayText;
        if (result.reason === ResultReason.RecognizedSpeech) {
            displayText = `${result.text}`
            console.log('recognized')
        } else {
            displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
        }
        console.log(displayText)
        this.setState({
            translateText: displayText
        });
    });
    } catch (err) {
        // res.status(401).send('There was an error authorizing your speech key.');
        console.log('There was an error authorizing your speech key.')
    }
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
    console.log(this.state.translateText)
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
            'text': this.state.translateText
        }],
        responseType: 'json'
    }).then((response) => {
        this.setState({
            translatedText: response.data["0"]["translations"]["0"]["text"]
        })
    })

    // const url1 = 'http://localhost:7071/api/save/' + submitted.translateText;
    const url1 = 'https://ssagarcosmosdbfunc.azurewebsites.net/api/save/' + this.state.translateText;
    fetch(url1)
        .then((result) => {
            // console.log(result)
        })

    // const url2 = 'http://localhost:7071/api/translations/list'
    const url2 = 'https://ssagarcosmosdbfunc.azurewebsites.net/api/translations/list?'
    fetch(url2)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
              pastTranslations: result
            })
        })        
  }

  sendMessage = () => {
    // if(microsoftTeams.chat.isSupported()) {
    //   const chatPromise = microsoftTeams.chat.openGroupChat({ users: ["alexw@tltfh.onmicrosoft.com"], topic: "Prep For Meeting Tomorrow", message: "Hi folks kicking off chat about our meeting tomorrow"});
    //   chatPromise.
    //     then((result) => {console.log(result)}).
    //     catch((error) => {console.log(error)});
    // }
    // else { /* handle case where capability isn't supported */ }

    microsoftTeams.people.selectPeople("Send to", null, false, true).then((res) => {
      console.log(res);
      const usr = []
      if(microsoftTeams.chat.isSupported()) {
        if(res.length > 1) {
          res.forEach(element => {
            console.log(element.email)
            usr.push(element.email)
          });
          const chatPromise = microsoftTeams.chat.openGroupChat({ users: usr, message: this.state.translatedText});
          chatPromise.
            then((result) => {console.log(result)}).
            catch((error) => {console.log(error)});
        } else {
          const chatPromise = microsoftTeams.chat.openGroupChat({ users: [res[0].email], message: this.state.translatedText});
          chatPromise.
            then((result) => {console.log(result)}).
            catch((error) => {console.log(error)});
        }
        console.log(usr)
      }
      else { /* handle case where capability isn't supported */ }
    })

//     microsoftTeams.people.selectPeople((error: microsoftTeams.SdkError, people: microsoftTeams.people.PeoplePickerResult[]) => 
//  {
//     if (error) 
//     {
//         if (error.message) 
//            {
//              alert(" ErrorCode: " + error.errorCode + error.message);
//            }
//             else 
//             {
//               alert(" ErrorCode: " + error.errorCode);
//             }
//       }
//     if (people)
//      {
//             console.log(" People length: " + people.length + " " + JSON.stringify(people));
//       }
//   },{ setSelected: ["aad id"], openOrgWideSearchInChatOrChannel: true, singleSelect: false});
  }

  render() {
    if (this.state.pastTranslations.size === 0) {
      console.log("null")
      return null;
    } 
    else {
      return (
        <div sx={{backgroundColor:'yellow'}}>
          <Typography variant="h2" component="div" style={{"textAlign": "center", paddingTop:20}}>
                      Microsoft Translation
          </Typography>
          
          <div style={{padding:20}}>
            <Form pastTr={this.state.pastTranslations} handleSubmit={this.handleSubmit} translatedText={this.state.translatedText} translateText = {this.state.translateText} s2t={this.sttFromMic} handleTranslateToChange={this.handleTranslateToChange} sendMessage={this.sendMessage} />
          </div>
        </div>
      )
    }
  }
}

export default App
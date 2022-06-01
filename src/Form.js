import React, {Component} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MicNoneRoundedIcon from '@mui/icons-material/MicNoneRounded';

class Form extends Component {
    state = {
        translateText: "",
        translatedText: "Translation",
        trTo: "en",
        trFrom:"1",
        pastTr:"a",
        pastTrList:this.props.pastTr
    }
    
    // state = this.initialState

    // componentWillReceiveProps(props) {
    //     this.setState({
    //         pastTrList: props.pastTrList,
    //     })
    //     console.log(this.state.pastTrList)
    // }
    handleTextChange = (event) => {
        // const {translateText, value} = ;
        if(event.target.value !== "") {
            this.setState({
                translateText:event.target.value,
            })
        }
        // console.log((this.state.translateText))
    }

    handleToChange = (event) => {
        console.log("To")
        console.log(event.target.value)
        this.setState({trTo: event.target.value});
      }
    
    handleFromChange = (event) => {
        console.log("From")
        console.log(event.target.value)
        this.setState({trFrom: event.target.value});
      }

    handlePastTrChange = (event) => {
        console.log("Past")
        console.log(event.target.value)
        // console.log(this.props.trStr.find(item => item.id === event.target.value))
        this.setState({pastTr: event.target.value});
        if(event.target.value !== 'a') {
            this.setState({translateText:event.target.value})
            var event = new Event('input', { bubbles: true });
    this.myinput.dispatchEvent(event);
        }

    }

    submitForm = () => {
        this.props.handleSubmit(this.state)   
    }

    startRecord = () => {
        this.props.s2t()
    }

    render() {
        const translateText = this.props.translateText;
        const pastTrList = this.props.pastTr
        // const submitHandler = this.props.handleSubmit
        // this.setState({pastTrLis: this.props.pastTr})
        
        console.log(translateText)
        let translationsList = pastTrList.length > 0
		&& pastTrList.map((item, i) => {
    		return (
	    		<MenuItem key={i} value={item.trStr}>{item.trStr}</MenuItem>
		    )
	    }, this);
        // console.log(this.state.trFrom)
        // for (const [key, value] of this.props.data) {
        //     console.log(key + ' = ' + value)
        // }
          const card = (
            <React.Fragment>
              <CardContent rows={4}>
                <Typography variant="body1">
                  {this.props.translatedText}
                </Typography>
              </CardContent>
            </React.Fragment>
          );
        // const [value, setValue] = React.useState('tr');
        
        // const handleChange = (event) => {
        //     setValue(event.target.value);
        //   };

        return (
            <Box sx={{ width: '100%'}}>
                <Grid container spacing={{xs: 2, sm: 3, md: 3}} sx={{ width: '100%'}}>
                    {/* <form> */}
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <InputLabel id="demo-select-small1">From</InputLabel>
                            <Select 
                                labelId="demo-simple-select-label1"
                                id="demo-simple-select1"
                                value={this.state.trFrom}
                                label="Translate-from"
                                onChange={this.handleFromChange}
                                >
                                <MenuItem value={"1"}>Detect Language</MenuItem>
                                <MenuItem value={"af"}>Afrikaans</MenuItem>
                                <MenuItem value={"am"}>Amharic</MenuItem>
                                <MenuItem value={"ar"}>Arabic</MenuItem>
                                <MenuItem value={"as"}>Assamese</MenuItem>
                                <MenuItem value={"az"}>Azerbaijani</MenuItem>
                                <MenuItem value={"ba"}>Bashkir</MenuItem>
                                <MenuItem value={"bg"}>Bulgarian</MenuItem>
                                <MenuItem value={"bn"}>Bangla</MenuItem>
                                <MenuItem value={"bo"}>Tibetan</MenuItem>
                                <MenuItem value={"bs"}>Bosnian</MenuItem>
                                <MenuItem value={"ca"}>Catalan</MenuItem>
                                <MenuItem value={"cs"}>Czech</MenuItem>
                                <MenuItem value={"cy"}>Welsh</MenuItem>
                                <MenuItem value={"da"}>Danish</MenuItem>
                                <MenuItem value={"de"}>German</MenuItem>
                                <MenuItem value={"dv"}>Divehi</MenuItem>
                                <MenuItem value={"el"}>Greek</MenuItem>
                                <MenuItem value={"en"}>English</MenuItem>
                                <MenuItem value={"es"}>Spanish</MenuItem>
                                <MenuItem value={"et"}>Estonian</MenuItem>
                                <MenuItem value={"eu"}>Basque</MenuItem>
                                <MenuItem value={"fa"}>Persian</MenuItem>
                                <MenuItem value={"fi"}>Finnish</MenuItem>
                                <MenuItem value={"fil"}>Filipino</MenuItem>
                                <MenuItem value={"fj"}>Fijian</MenuItem>
                                <MenuItem value={"fo"}>Faroese</MenuItem>
                                <MenuItem value={"fr"}>French</MenuItem>
                                <MenuItem value={"fr-CA"}>French (Canada)</MenuItem>
                                <MenuItem value={"ga"}>Irish</MenuItem>
                                <MenuItem value={"gl"}>Galician</MenuItem>
                                <MenuItem value={"gu"}>Gujarati</MenuItem>
                                <MenuItem value={"he"}>Hebrew</MenuItem>
                                <MenuItem value={"hi"}>Hindi</MenuItem>
                                <MenuItem value={"hr"}>Croatian</MenuItem>
                                <MenuItem value={"hsb"}>Upper Sorbian</MenuItem>
                                <MenuItem value={"ht"}>Haitian Creole</MenuItem>
                                <MenuItem value={"hu"}>Hungarian</MenuItem>
                                <MenuItem value={"hy"}>Armenian</MenuItem>
                                <MenuItem value={"id"}>Indonesian</MenuItem>
                                <MenuItem value={"ikt"}>Inuinnaqtun</MenuItem>
                                <MenuItem value={"is"}>Icelandic</MenuItem>
                                <MenuItem value={"it"}>Italian</MenuItem>
                                <MenuItem value={"iu"}>Inuktitut</MenuItem>
                                <MenuItem value={"iu-Latn"}>Inuktitut (Latin)</MenuItem>
                                <MenuItem value={"ja"}>Japanese</MenuItem>
                                <MenuItem value={"ka"}>Georgian</MenuItem>
                                <MenuItem value={"kk"}>Kazakh</MenuItem>
                                <MenuItem value={"km"}>Khmer</MenuItem>
                                <MenuItem value={"kmr"}>Kurdish (Northern)</MenuItem>
                                <MenuItem value={"kn"}>Kannada</MenuItem>
                                <MenuItem value={"ko"}>Korean</MenuItem>
                                <MenuItem value={"ku"}>Kurdish (Central)</MenuItem>
                                <MenuItem value={"ky"}>Kyrgyz</MenuItem>
                                <MenuItem value={"lo"}>Lao</MenuItem>
                                <MenuItem value={"lt"}>Lithuanian</MenuItem>
                                <MenuItem value={"lv"}>Latvian</MenuItem>
                                <MenuItem value={"lzh"}>Chinese (Literary)</MenuItem>
                                <MenuItem value={"mg"}>Malagasy</MenuItem>
                                <MenuItem value={"mi"}>Māori</MenuItem>
                                <MenuItem value={"mk"}>Macedonian</MenuItem>
                                <MenuItem value={"ml"}>Malayalam</MenuItem>
                                <MenuItem value={"mn-Cyrl"}>Mongolian (Cyrillic)</MenuItem>
                                <MenuItem value={"mn-Mong"}>Mongolian (Traditional)</MenuItem>
                                <MenuItem value={"mr"}>Marathi</MenuItem>
                                <MenuItem value={"ms"}>Malay</MenuItem>
                                <MenuItem value={"mt"}>Maltese</MenuItem>
                                <MenuItem value={"my"}>Myanmar (Burmese)</MenuItem>
                                <MenuItem value={"nb"}>Norwegian</MenuItem>
                                <MenuItem value={"ne"}>Nepali</MenuItem>
                                <MenuItem value={"nl"}>Dutch</MenuItem>
                                <MenuItem value={"or"}>Odia</MenuItem>
                                <MenuItem value={"otq"}>Querétaro Otomi</MenuItem>
                                <MenuItem value={"pa"}>Punjabi</MenuItem>
                                <MenuItem value={"pl"}>Polish</MenuItem>
                                <MenuItem value={"prs"}>Dari</MenuItem>
                                <MenuItem value={"ps"}>Pashto</MenuItem>
                                <MenuItem value={"pt"}>Portuguese (Brazil)</MenuItem>
                                <MenuItem value={"pt-PT"}>Portuguese (Portugal)</MenuItem>
                                <MenuItem value={"ro"}>Romanian</MenuItem>
                                <MenuItem value={"ru"}>Russian</MenuItem>
                                <MenuItem value={"sk"}>Slovak</MenuItem>
                                <MenuItem value={"sl"}>Slovenian</MenuItem>
                                <MenuItem value={"sm"}>Samoan</MenuItem>
                                <MenuItem value={"so"}>Somali</MenuItem>
                                <MenuItem value={"sq"}>Albanian</MenuItem>
                                <MenuItem value={"sr-Cyrl"}>Serbian (Cyrillic)</MenuItem>
                                <MenuItem value={"sr-Latn"}>Serbian (Latin)</MenuItem>
                                <MenuItem value={"sv"}>Swedish</MenuItem>
                                <MenuItem value={"sw"}>Swahili</MenuItem>
                                <MenuItem value={"ta"}>Tamil</MenuItem>
                                <MenuItem value={"te"}>Telugu</MenuItem>
                                <MenuItem value={"th"}>Thai</MenuItem>
                                <MenuItem value={"ti"}>Tigrinya</MenuItem>
                                <MenuItem value={"tk"}>Turkmen</MenuItem>
                                <MenuItem value={"tlh-Latn"}>Klingon (Latin)</MenuItem> 
                                <MenuItem value={"tlh-Piqd"}>Klingon (pIqaD)</MenuItem>
                                <MenuItem value={"to"}>Tongan</MenuItem>
                                <MenuItem value={"tr"}>Turkish</MenuItem>
                                <MenuItem value={"tt"}>Tatar</MenuItem>
                                <MenuItem value={"ty"}>Tahitian</MenuItem>
                                <MenuItem value={"ug"}>Uyghur</MenuItem>
                                <MenuItem value={"uk"}>Ukrainian</MenuItem>
                                <MenuItem value={"ur"}>Urdu</MenuItem>
                                <MenuItem value={"uz"}>Uzbek (Latin)</MenuItem>
                                <MenuItem value={"vi"}>Vietnamese</MenuItem>
                                <MenuItem value={"yua"}>Yucatec Maya</MenuItem>
                                <MenuItem value={"yue"}>Cantonese (Traditional)</MenuItem>
                                <MenuItem value={"zh-Hant"}>Chinese Traditional</MenuItem>
                                <MenuItem value={"zu"}>Zulu</MenuItem>
                            </Select>

                            <IconButton color="primary" aria-label="upload picture" component="span" sx={{float:'right'}} onClick={this.startRecord}>
                                <MicNoneRoundedIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                            <InputLabel id="demo-select-small2">To</InputLabel>
                            <Select 
                                labelId="demo-simple-select-label2"
                                id="demo-simple-select2"
                                value={this.state.trTo}
                                label="Translate-to"
                                onChange={this.handleToChange}
                                >
                                <MenuItem value={"af"}>Afrikaans</MenuItem>
                                <MenuItem value={"am"}>Amharic</MenuItem>
                                <MenuItem value={"ar"}>Arabic</MenuItem>
                                <MenuItem value={"as"}>Assamese</MenuItem>
                                <MenuItem value={"az"}>Azerbaijani</MenuItem>
                                <MenuItem value={"ba"}>Bashkir</MenuItem>
                                <MenuItem value={"bg"}>Bulgarian</MenuItem>
                                <MenuItem value={"bn"}>Bangla</MenuItem>
                                <MenuItem value={"bo"}>Tibetan</MenuItem>
                                <MenuItem value={"bs"}>Bosnian</MenuItem>
                                <MenuItem value={"ca"}>Catalan</MenuItem>
                                <MenuItem value={"cs"}>Czech</MenuItem>
                                <MenuItem value={"cy"}>Welsh</MenuItem>
                                <MenuItem value={"da"}>Danish</MenuItem>
                                <MenuItem value={"de"}>German</MenuItem>
                                <MenuItem value={"dv"}>Divehi</MenuItem>
                                <MenuItem value={"el"}>Greek</MenuItem>
                                <MenuItem value={"en"}>English</MenuItem>
                                <MenuItem value={"es"}>Spanish</MenuItem>
                                <MenuItem value={"et"}>Estonian</MenuItem>
                                <MenuItem value={"eu"}>Basque</MenuItem>
                                <MenuItem value={"fa"}>Persian</MenuItem>
                                <MenuItem value={"fi"}>Finnish</MenuItem>
                                <MenuItem value={"fil"}>Filipino</MenuItem>
                                <MenuItem value={"fj"}>Fijian</MenuItem>
                                <MenuItem value={"fo"}>Faroese</MenuItem>
                                <MenuItem value={"fr"}>French</MenuItem>
                                <MenuItem value={"fr-CA"}>French (Canada)</MenuItem>
                                <MenuItem value={"ga"}>Irish</MenuItem>
                                <MenuItem value={"gl"}>Galician</MenuItem>
                                <MenuItem value={"gu"}>Gujarati</MenuItem>
                                <MenuItem value={"he"}>Hebrew</MenuItem>
                                <MenuItem value={"hi"}>Hindi</MenuItem>
                                <MenuItem value={"hr"}>Croatian</MenuItem>
                                <MenuItem value={"hsb"}>Upper Sorbian</MenuItem>
                                <MenuItem value={"ht"}>Haitian Creole</MenuItem>
                                <MenuItem value={"hu"}>Hungarian</MenuItem>
                                <MenuItem value={"hy"}>Armenian</MenuItem>
                                <MenuItem value={"id"}>Indonesian</MenuItem>
                                <MenuItem value={"ikt"}>Inuinnaqtun</MenuItem>
                                <MenuItem value={"is"}>Icelandic</MenuItem>
                                <MenuItem value={"it"}>Italian</MenuItem>
                                <MenuItem value={"iu"}>Inuktitut</MenuItem>
                                <MenuItem value={"iu-Latn"}>Inuktitut (Latin)</MenuItem>
                                <MenuItem value={"ja"}>Japanese</MenuItem>
                                <MenuItem value={"ka"}>Georgian</MenuItem>
                                <MenuItem value={"kk"}>Kazakh</MenuItem>
                                <MenuItem value={"km"}>Khmer</MenuItem>
                                <MenuItem value={"kmr"}>Kurdish (Northern)</MenuItem>
                                <MenuItem value={"kn"}>Kannada</MenuItem>
                                <MenuItem value={"ko"}>Korean</MenuItem>
                                <MenuItem value={"ku"}>Kurdish (Central)</MenuItem>
                                <MenuItem value={"ky"}>Kyrgyz</MenuItem>
                                <MenuItem value={"lo"}>Lao</MenuItem>
                                <MenuItem value={"lt"}>Lithuanian</MenuItem>
                                <MenuItem value={"lv"}>Latvian</MenuItem>
                                <MenuItem value={"lzh"}>Chinese (Literary)</MenuItem>
                                <MenuItem value={"mg"}>Malagasy</MenuItem>
                                <MenuItem value={"mi"}>Māori</MenuItem>
                                <MenuItem value={"mk"}>Macedonian</MenuItem>
                                <MenuItem value={"ml"}>Malayalam</MenuItem>
                                <MenuItem value={"mn-Cyrl"}>Mongolian (Cyrillic)</MenuItem>
                                <MenuItem value={"mn-Mong"}>Mongolian (Traditional)</MenuItem>
                                <MenuItem value={"mr"}>Marathi</MenuItem>
                                <MenuItem value={"ms"}>Malay</MenuItem>
                                <MenuItem value={"mt"}>Maltese</MenuItem>
                                <MenuItem value={"my"}>Myanmar (Burmese)</MenuItem>
                                <MenuItem value={"nb"}>Norwegian</MenuItem>
                                <MenuItem value={"ne"}>Nepali</MenuItem>
                                <MenuItem value={"nl"}>Dutch</MenuItem>
                                <MenuItem value={"or"}>Odia</MenuItem>
                                <MenuItem value={"otq"}>Querétaro Otomi</MenuItem>
                                <MenuItem value={"pa"}>Punjabi</MenuItem>
                                <MenuItem value={"pl"}>Polish</MenuItem>
                                <MenuItem value={"prs"}>Dari</MenuItem>
                                <MenuItem value={"ps"}>Pashto</MenuItem>
                                <MenuItem value={"pt"}>Portuguese (Brazil)</MenuItem>
                                <MenuItem value={"pt-PT"}>Portuguese (Portugal)</MenuItem>
                                <MenuItem value={"ro"}>Romanian</MenuItem>
                                <MenuItem value={"ru"}>Russian</MenuItem>
                                <MenuItem value={"sk"}>Slovak</MenuItem>
                                <MenuItem value={"sl"}>Slovenian</MenuItem>
                                <MenuItem value={"sm"}>Samoan</MenuItem>
                                <MenuItem value={"so"}>Somali</MenuItem>
                                <MenuItem value={"sq"}>Albanian</MenuItem>
                                <MenuItem value={"sr-Cyrl"}>Serbian (Cyrillic)</MenuItem>
                                <MenuItem value={"sr-Latn"}>Serbian (Latin)</MenuItem>
                                <MenuItem value={"sv"}>Swedish</MenuItem>
                                <MenuItem value={"sw"}>Swahili</MenuItem>
                                <MenuItem value={"ta"}>Tamil</MenuItem>
                                <MenuItem value={"te"}>Telugu</MenuItem>
                                <MenuItem value={"th"}>Thai</MenuItem>
                                <MenuItem value={"ti"}>Tigrinya</MenuItem>
                                <MenuItem value={"tk"}>Turkmen</MenuItem>
                                <MenuItem value={"tlh-Latn"}>Klingon (Latin)</MenuItem> 
                                <MenuItem value={"tlh-Piqd"}>Klingon (pIqaD)</MenuItem>
                                <MenuItem value={"to"}>Tongan</MenuItem>
                                <MenuItem value={"tr"}>Turkish</MenuItem>
                                <MenuItem value={"tt"}>Tatar</MenuItem>
                                <MenuItem value={"ty"}>Tahitian</MenuItem>
                                <MenuItem value={"ug"}>Uyghur</MenuItem>
                                <MenuItem value={"uk"}>Ukrainian</MenuItem>
                                <MenuItem value={"ur"}>Urdu</MenuItem>
                                <MenuItem value={"uz"}>Uzbek (Latin)</MenuItem>
                                <MenuItem value={"vi"}>Vietnamese</MenuItem>
                                <MenuItem value={"yua"}>Yucatec Maya</MenuItem>
                                <MenuItem value={"yue"}>Cantonese (Traditional)</MenuItem>
                                <MenuItem value={"zh-Hant"}>Chinese Traditional</MenuItem>
                                <MenuItem value={"zu"}>Zulu</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                            <TextField
                                id="translateText"
                                // label="Text to Translate"
                                // placeholder='Enter text'
                                multiline
                                rows={6}
                                value={this.props.translateText}
                                onChange={this.handleTextChange}
                                // defaultValue="Default Value"
                                ref={(input)=> this.myinput = input}
                                style={{width:'100%'}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Card variant="outlined" style={{height:167, width:'100%'}}>{card}</Card>
                        </Grid>
                        <Grid item xs={12} lg={12}>
                            <InputLabel id="demo-select-small1">Past searches</InputLabel>
                            <Select 
                                labelId="demo-simple-select-label4"
                                id="demo-simple-select4"
                                value={this.state.pastTr}
                                label="Translated-past"
                                onChange={this.handlePastTrChange}
                            >
                                <MenuItem key="-1" value="a">Old queries</MenuItem>
                                {translationsList}
                            </Select>
                        </Grid>
                    <Grid>
                        <Button variant="contained" style={{marginTop:10, marginLeft:20}} onClick={this.submitForm}>Translate</Button>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Form;
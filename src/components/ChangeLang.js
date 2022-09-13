import React, { Component } from "react";
import i18n from "i18next";
import Flag from 'react-flagkit';
import { Button } from "@mui/material";

export default class ChangeLang extends Component {
  state = {
    lang: "en"
  };
  langChange = value => {
    this.setState({ lang: value }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");
      i18n.changeLanguage(lang);
    });
  };
  render() {
    const { lang } = this.state;
    return (
      <div>
        <Button
          endIcon={<Flag country="GB" />}
          onClick={() => this.langChange('en')}
          style={{backgroundColor: lang === 'en' ? '#F3F3F3' : null}}>
          EN
        </Button>
        <Button 
          endIcon={<Flag country="MX" />} 
          onClick={() => this.langChange('es')}
          style={{backgroundColor: lang === 'es' ? '#F3F3F3' : null}}>
          ES
        </Button>
      </div>
    );
  }
}
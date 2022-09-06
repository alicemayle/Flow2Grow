import React, { Component } from "react";
import i18n from "i18next";
import { FormControl, MenuItem, Select } from "@mui/material";

export default class ChangeLang extends Component {
  state = {
    lang: "en"
  };
  langChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");
      i18n.changeLanguage(lang);
    });
  };
  render() {
    const { lang } = this.state;
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <Select
          id="demo-simple-select"
          value={lang}
          name="lang"
          onChange={this.langChange}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'es'}>Español</MenuItem>
        </Select>
      </FormControl>
    /*<div>
        <select
          className="selectBox"
          onChange={this.langChange}
          name="lang"
          value={lang}
        >
          <option className="optionsMenu" value="en">
            English
          </option>
          <option className="optionsMenu" value="tm">
            Tamil(தமிழ்)
          </option>
          <option className="optionsMenu" value="tl">
            Telugu(తెలుగు)
          </option>
          <option className="optionsMenu" value="sp">
            Spanish(española)
          </option>
        </select>
        <p className="textToChange" style={{background: 'red'}}>{t("Hi")}</p>
        <p className="textToChange">{t("Actions")}</p>
      </div>*/
    );
  }
}
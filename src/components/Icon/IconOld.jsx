import React, { Component } from 'react';
import Logo from 'assets/icons/logo.svg';
import ProjectList from 'assets/icons/projects-list.svg';
import Github from 'assets/icons/github.svg';
import Mail from 'assets/icons/mail.svg';
import Edit from 'assets/icons/edit.svg';
import Settings from 'assets/icons/settings.svg';
import Hexagon from 'assets/icons/hexagon.svg';
import ContactMe from 'assets/icons/contact-me.svg';

export default class Icon extends Component {
  render() {
    const { className, icon } = this.props;

    switch (icon) {
      case 'logo': {
        return <Logo className={className} style={{ width: '20px' }} />;
      }

      case 'project-list': {
        return <ProjectList className={className} />;
      }

      case 'github': {
        return <Github className={className} />;
      }

      case 'mail': {
        return <Mail className={className} />;
      }

      case 'edit': {
        return <Edit className={className} />;
      }

      case 'settings': {
        return <Settings className={className} />;
      }

      case 'hexagon': {
        return <Hexagon className={className} />;
      }

      case 'contact-me': {
        return <ContactMe className={className} />;
      }

      default: {
        return null;
      }
    }
  }
}

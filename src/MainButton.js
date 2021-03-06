/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import styled from 'styled-jss';
import PropTypes from 'prop-types';

const Wrapper = styled('a')(({ backgroundColor, size, iconColor }) => ({
  color: iconColor,
  zIndex: '1',
  display: 'flex',
  border: 'none',
  borderRadius: '50%',
  boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
  cursor: 'pointer',
  outline: 'none',
  padding: '0',
  WebkitUserDrag: 'none',
  fontWeight: 'bold',
  justifyContent: 'center',
  alignItems: 'center',
  width: size,
  height: size,
  backgroundColor,
}));

const IconWrapper = styled('div')(({ isOpen }) => ({
  display: 'flex',
  position: 'absolute',
  WebkitTransition: '-webkit-transform 300ms',
  transition: 'transform 300ms',
  WebkitTransform: `rotate(${isOpen ? 180 : 0}deg)`,
  transform: `rotate(${isOpen ? 180 : 0}deg)`,
}));

class MainButton extends Component {
  static propTypes = {
    iconResting: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
    isOpen: PropTypes.bool,
    size: PropTypes.number,
  };

  static defaultProps = {
    isOpen: false,
    size: 56,
  };

  render() {
    const { iconResting, iconActive, isOpen } = this.props;

    return (
      <Wrapper {...this.props}>
        <IconWrapper isOpen={isOpen}>{isOpen ? iconActive : iconResting}</IconWrapper>
      </Wrapper>
    );
  }
}

export default MainButton;

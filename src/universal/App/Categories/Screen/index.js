import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  UikContainerHorizontal,
  UikContainerVertical,
  UikNavTitle,
  UikWidgetContent,
  UikWidget,
  UikInput,
  UikFormInputGroup,
  UikHeadline,
  UikHeadlineDesc,
  UikDivider,
  UikButton,
  Uikon,
  UikAvatar,
} from '@components';

import cls from './screen.scss';

const Screen = () => {
  const [textInput, setTextInput] = React.useState('');

  // const myfunction = () => {
  //   return console.log(textInput);
  // };
  useEffect(() => {
    console.log(textInput);
  });

  return (
    <UikContainerVertical className={cls.pageWrapper}>
      <UikHeadline className={cls.pageTitle}>
        What kind of website should this be?
      </UikHeadline>
      <UikContainerVertical className={cls.vertical}>
        <UikContainerHorizontal className={cls.horizontal}>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Business');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Business</UikNavTitle>
          </UikWidget>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Online Store');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Online Store</UikNavTitle>
          </UikWidget>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Music');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Music</UikNavTitle>
          </UikWidget>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Designer');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Designer</UikNavTitle>
          </UikWidget>
        </UikContainerHorizontal>
        <UikContainerHorizontal className={cls.horizontal}>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Blog');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Blog</UikNavTitle>
          </UikWidget>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Beauty and Wellness');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>
              Beauty and Wellness
            </UikNavTitle>
          </UikWidget>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('CV');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>CV</UikNavTitle>
          </UikWidget>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Events');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Events</UikNavTitle>
          </UikWidget>
        </UikContainerHorizontal>
        <UikContainerHorizontal className={cls.horizontal}>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Photography');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Photography</UikNavTitle>
          </UikWidget>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Food');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Food</UikNavTitle>
          </UikWidget>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Fitness');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Fitness</UikNavTitle>
          </UikWidget>
          <UikWidget
            className={cls.widget}
            onClick={() => {
              setTextInput('Other');
            }}
          >
            <UikNavTitle className={cls.widgetTitle}>Other</UikNavTitle>
          </UikWidget>
        </UikContainerHorizontal>
      </UikContainerVertical>
    </UikContainerVertical>
  );
};
export default Screen;

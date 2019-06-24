import React from 'react';

// Hero Links
import {Link} from 'gatsby';

// Layout imports
import Section from '../components/Layout/Section';
// eslint-disable-next-line
import BackgroundSection from '../components/Layout/Hero Section/BackgroundImageSection';
import HeroContainer from '../components/Layout/Hero Section/HeroContainer';
import CardContainer from '../components/Layout/Masonry Grid/CardContainer';

// Typography imports
import HeroType from '../components/Typography/Hero/HeroType';

// Content imports
import AboutSectionContent from '../components/Content/AboutSectionContent';
import HireSectionContent from '../components/Content/HireSectionContent';
import BlogContentList from '../components/Content/BlogContentList';

import './../components/layout.scss';
import styled from 'styled-components';

const IndexPage = ({className}) => (
  <main className={className}>
    <BackgroundSection>
      <HeroContainer>
        <HeroType>{'<kayak />'}</HeroType>
        <div className='flex-sideways'>
          <Link to='#about' className='hero-link'>
            about
          </Link>
          <Link to='#work' className='hero-link'>
            work
          </Link>
          <Link to='#blog' className='hero-link'>
            blog
          </Link>
        </div>
      </HeroContainer>
    </BackgroundSection>

    <Section>
      <div id='about'></div>
      <AboutSectionContent></AboutSectionContent>
    </Section>

    <Section>
      <div id='work'></div>
      <div className='work__card-container'>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
      </div>
    </Section>

    <Section>
      <div id='blog'></div>
      <BlogContentList></BlogContentList>
    </Section>
  </main>
);

const StyledIndexPage = styled(IndexPage)``;

export default StyledIndexPage;

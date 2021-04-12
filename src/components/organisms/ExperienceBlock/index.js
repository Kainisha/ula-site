import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import List from '@molecules/List';
import {
  BlockWrapperStyled, BlockStyled, BlockTitleStyled, BlockItemsStyled,
} from './styles';

const ExperienceBlock = ({ title, items }) => {
  const leftBlockRef = useRef(null);
  const rightBlockRef = useRef(null);
  const mainBlockRef = useRef(null);

  useEffect(() => {
    const leftBlock = leftBlockRef.current;
    const rightBlock = rightBlockRef.current.childNodes;

    gsap.set([leftBlock, rightBlock], { autoAlpha: 0, scaleX: 0.8, scaleY: 0.8 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, paused: true });

    tl.fromTo(leftBlock, { x: '-=50', y: '+=50' }, {
      duration: 1.5, x: '+=50', y: '-= 50', autoAlpha: 1, scaleX: 1, scaleY: 1,
    }, 0)
      .fromTo(rightBlock, { y: '+=150' }, {
        duration: 1.5, y: '-=150', autoAlpha: 1, scaleX: 1, scaleY: 1,
      }, 0);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ intersectionRatio }) => {
        if (intersectionRatio > 0.8) {
          tl.play();
        }
      });
    }, {
      threshold: 0.8,
      rootMargin: '0px 0px 0px 0px',
    });

    observer.observe(mainBlockRef.current);
  }, []);

  return (
    <BlockWrapperStyled>
      <BlockStyled className="section" ref={mainBlockRef} data-scroll-section>
        <BlockTitleStyled ref={leftBlockRef} data-scroll>
          <h3>{title}</h3>
        </BlockTitleStyled>
        <BlockItemsStyled ref={rightBlockRef} data-scroll>
          <List items={items} />
        </BlockItemsStyled>
      </BlockStyled>
    </BlockWrapperStyled>
  );
};

ExperienceBlock.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};

ExperienceBlock.defaultProps = {
  title: '',
  items: [],
};

export default ExperienceBlock;

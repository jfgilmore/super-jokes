import React from 'react';

type props = {
  src: string;
  alt: string;
  uri: string;
};

const SocialLink: React.FC<props> = ({ src, alt, uri }) => (
  <a
    href={uri}
    className="social-link"
    data-testid="github-link"
    rel="noopener noreferrer nofollow"
  >
    <img src={src} alt={alt} role="presentation" />
  </a>
);

export default SocialLink;

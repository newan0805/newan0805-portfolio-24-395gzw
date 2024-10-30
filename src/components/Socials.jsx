// src/components/Socials.js
import React, { Suspense, lazy } from 'react';
import { SocialsContainer } from '../styles/AppStyles';

const importIcon = (iconName) => {
  return lazy(() =>
    import(`react-icons/fa`).then((module) => {
      const Icon = module[iconName];
      if (!Icon) {
        throw new Error(`Icon ${iconName} not found`);
      }
      return { default: Icon };
    })
  );
};

const Socials = ({ socialLinks }) => {
  return (
    <SocialsContainer>
      {socialLinks.map((social) => {
        const Icon = importIcon(social.icon);

        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <Suspense fallback={<span>Loading icon...</span>}>
              <Icon className="text-xl" />
            </Suspense>
            <span>{social.platform}</span>
          </a>
        );
      })}
    </SocialsContainer>
  );
};

export default Socials;

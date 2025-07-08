import React from 'react';

const Card = ({ pretitle, title, description, imageUrl, ctaLinks = [], ...props }) => {
  return (
    <div className="nv-teaser nv-teaser-card" {...props}>
      {imageUrl && (
        <div className="nv-teaser-media">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="nv-teaser-content">
        <div className="nv-teaser-header">
          {pretitle && (
            <div className="nv-text nv-text-bold">
              {pretitle}
            </div>
          )}
          <h2 className="nv-h--small">
            {title}
          </h2>
        </div>
        <div className="nv-teaser-body">
          <p>{description}</p>
        </div>
        {ctaLinks.length > 0 && (
          <div className="nv-teaser-footer">
            {ctaLinks.map((link, index) => (
              <a
                key={index}
                className="nv-cta-secondary--small"
                href={link.href || '#'}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card; 
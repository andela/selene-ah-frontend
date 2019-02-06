import React from 'react';
import ContentLoader from 'react-content-loader';
import './articles-loader.scss';

/**
 * @description - Article Loader Component
 * @param {object} props
 * @returns {JSX} - Article loader JSX template
 */
const ArticlesLoader = props => (
<div className="loader-card">
<ContentLoader
  height={160}
  width={150}
  speed={2}
  primaryColor="#f3f3f3"
  secondaryColor="#ecebeb"
  {...props}
>
  <rect x="29" y="117.61" rx="3" ry="3" width="72.2" height="6.08" />
  <rect x="28" y="105.96" rx="3" ry="3" width="98.49" height="8.38" />
  <rect x="29.34" y="6.61" rx="0" ry="0" width="121.2" height="95.16" />
  <rect x="236.63" y="83.61" rx="0" ry="0" width="0" height="0" />
  <rect x="29" y="130.61" rx="3" ry="3" width="45.6" height="6.91" />
</ContentLoader>
</div>
);
export default ArticlesLoader;

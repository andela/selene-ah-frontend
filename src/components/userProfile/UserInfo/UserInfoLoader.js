import React from 'react';
import ContentLoader from 'react-content-loader';

/**
 * @description - User Information Loader
 * @param {object} props
 * @returns {JSX} - UserInformation template
 */
const UserInforloader = props => (
  <div className="user-top">
  <ContentLoader
    height={200}
    width={800}
    speed={2}
    primaryColor="#d7d6d8"
    secondaryColor="#eae8eb"
    {...props}
  >
    <rect x="230" y="32.84" rx="4" ry="4" width="192.17" height="9.36" />
    <rect x="233" y="72.5" rx="3" ry="3" width="361.91" height="11.89" />
    <circle cx="121.15" cy="90.15" r="60.15" />
    <rect x="232" y="56.36" rx="3" ry="3" width="364.88" height="11.99" />
    <rect x="233.6" y="103.25" rx="3" ry="3" width="198.76" height="8.07" />
    <rect x="234.6" y="117.25" rx="3" ry="3" width="198.76" height="8.07" />
    <rect x="233.6" y="132.25" rx="3" ry="3" width="198.76" height="8.07" />
  </ContentLoader>
  </div>
);
export default UserInforloader;

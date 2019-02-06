import BarChart from 'react-feather/dist/icons/bar-chart-2';
import BookOpen from 'react-feather/dist/icons/book-open';

/**
 * @description - Profile Link Component
 * @param {object} props
 * @returns {JSX} - Profile link JSX template
 */
const ProfileLinks = props => (
  [
    {
      id: 1,
      class: 'side-card__link',
      title: 'Articles',
      icon: BookOpen,
      flag: props.activeArticle,
    }, {
      id: 2,
      class: 'side-card__link',
      title: 'Statistics',
      icon: BarChart,
      flag: props.activeStat,
    },
  ]);
export default ProfileLinks;

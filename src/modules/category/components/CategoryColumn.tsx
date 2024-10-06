import { Tag } from 'antd';

import { CategoryType } from '../../../shared/types/CategoryType';

interface CategoryColumnProps {
  category?: CategoryType;
}

const colors: string[] = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

const CategoryColumn = ({ category }: CategoryColumnProps) => {
  if (!category) {
    return null;
  }

  const cuurentColor = colors[category.id - 1] || colors[0];

  return <Tag color={cuurentColor}>{category.name}</Tag>;
};

export default CategoryColumn;

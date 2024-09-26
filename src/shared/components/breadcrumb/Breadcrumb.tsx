import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { BreadcrumbItemType, BreadcrumbSeparatorType } from 'antd/es/breadcrumb/Breadcrumb';
import { useNavigate } from 'react-router-dom';

export interface ListBreadcrumb {
  title: string;
  navigateTo?: string;
}

export interface BreadcrumbProps {
  listBreadcrumb: ListBreadcrumb[];
}

const Breadcrumb = ({ listBreadcrumb }: BreadcrumbProps) => {
  const navigate = useNavigate();

  const handleOnClickGoTo = (navigateTo: string) => {
    navigate(navigateTo);
  };

  const breadcrumbs: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[] = listBreadcrumb.map(
    (breadcrumb) => {
      if (breadcrumb.navigateTo) {
        return {
          title: (
            <a onClick={() => handleOnClickGoTo(breadcrumb.navigateTo || '')}>{breadcrumb.title}</a>
          ),
        };
      } else {
        return { title: breadcrumb.title };
      }
    },
  );

  return <BreadcrumbAntd items={breadcrumbs} />;
};

export default Breadcrumb;

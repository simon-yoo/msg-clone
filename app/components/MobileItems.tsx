import React from 'react';

interface MobileItemsProps {
  icon: any;
  href: string;
  active?: boolean;
  onClick?: () => void;
}
const MobileItems: React.FC<MobileItemsProps> = ({
  icon: Icon,
  href,
  active,
  onClick,
}) => {
  return <div>MobileItems</div>;
};

export default MobileItems;

import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../functions/connections/auth';
import { ContainerHeader, LogoExit } from './header.style';

const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    logOut(navigate);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ContainerHeader>
      <LogoExit onClick={showModal} />
      <Modal
        title="Atenção"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Sim, tenho certeza!"
        cancelText="Não!"
      >
        <p>Tem certeza que deseja sair?</p>
      </Modal>
    </ContainerHeader>
  );
};

export default Header;

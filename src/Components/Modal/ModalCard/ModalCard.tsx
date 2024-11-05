import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./ModalCard.css";
import IconButtonMui from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px grey #000",
  boxShadow: 24,
  p: 2,
  minWidth: 200,
};

type ModalCardProps = {
  children?: React.ReactNode;
  handleOpen: () => void;
  open: boolean;
  title?: string;
};

export const ModalCard: React.FC<ModalCardProps> = ({
  children = null,
  handleOpen,
  open,
  title,
}) => {
  const handleClose = () => handleOpen();

  return (
    <Modal open={open} onClose={handleClose} className="modal-card">
      <Box sx={style} className="modal-card-content">
        <div className="modal-card-header">
          <h3 className="modal-card-title">{title}</h3>
          <IconButtonMui
            onClick={handleClose}
            className="modal-close-button"
            aria-label="icon button"
          >
            <CloseIcon />
          </IconButtonMui>
        </div>

        {children}
      </Box>
    </Modal>
  );
};

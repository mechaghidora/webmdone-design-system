import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MuiModal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
};

export function Modal({
  open,
  onClose,
  title = "Modal title",
  content =
    "This is body1 content. The modal has a header with a close control and no footer actions.",
}: ModalProps) {
  return (
    <MuiModal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Paper
        elevation={8}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 420 },
          maxHeight: "90vh",
          overflow: "auto",
          outline: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
            px: 2,
            py: 1.5,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <IconButton aria-label="Close modal" onClick={onClose} edge="end">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">{content}</Typography>
        </Box>
      </Paper>
    </MuiModal>
  );
}

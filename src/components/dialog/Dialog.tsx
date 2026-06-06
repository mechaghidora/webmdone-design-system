import MuiButton from "@mui/material/Button";
import MuiDialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

export type DialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  secondaryLabel?: string;
  primaryLabel?: string;
};

export function Dialog({
  open,
  onClose,
  title = "Dialog title",
  content =
    "This is body1 content. Dialogs use an explicit backdrop and keep focus until dismissed.",
  secondaryLabel,
  primaryLabel = "Primary",
}: DialogProps) {
  return (
    <MuiDialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">{content}</Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2, justifyContent: "flex-end", gap: 1 }}>
        {secondaryLabel ? (
          <MuiButton variant="text" color="secondary" onClick={onClose}>
            {secondaryLabel}
          </MuiButton>
        ) : null}
        <MuiButton variant="text" color="primary" onClick={onClose}>
          {primaryLabel}
        </MuiButton>
      </DialogActions>
    </MuiDialog>
  );
}

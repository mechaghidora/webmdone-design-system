import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";

import { Button } from "@/components/button";

export type BackNextPaginationProps = {
  onBack?: () => void;
  onNext?: () => void;
  disableBack?: boolean;
  disableNext?: boolean;
};

export function BackNextPagination({
  onBack,
  onNext,
  disableBack = false,
  disableNext = false,
}: BackNextPaginationProps) {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <Button
        variant="text"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={onBack}
        disabled={disableBack}
      >
        BACK
      </Button>
      <Button
        variant="text"
        color="primary"
        endIcon={<ArrowForwardIcon />}
        onClick={onNext}
        disabled={disableNext}
      >
        NEXT
      </Button>
    </Stack>
  );
}

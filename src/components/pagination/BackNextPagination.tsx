import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";

import { Button } from "../button";
import { Typography } from "../typography";

export type BackNextPaginationProps = {
  /** Current page (1-based). */
  page: number;
  /** Total number of pages. */
  pageCount: number;
  onBack?: () => void;
  onNext?: () => void;
  disableBack?: boolean;
  disableNext?: boolean;
};

export function BackNextPagination({
  page,
  pageCount,
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
      <Typography
        variant="body2"
        component="span"
        aria-live="polite"
        aria-label={`Page ${page} of ${pageCount}`}
        sx={{ color: "var(--color-text-secondary)", minWidth: "3ch", textAlign: "center" }}
      >
        {page}/{pageCount}
      </Typography>
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

import Pagination from "@mui/material/Pagination";
import type { PaginationProps } from "@mui/material/Pagination";

export type NumberedPaginationProps = Omit<PaginationProps, "count" | "page" | "onChange"> & {
  /** Current page (1-based). */
  page: number;
  /** Total number of pages. */
  pageCount: number;
  onChange?: (page: number) => void;
};

export function NumberedPagination({
  page,
  pageCount,
  onChange,
  shape = "circular",
  color = "primary",
  ...props
}: NumberedPaginationProps) {
  return (
    <Pagination
      count={pageCount}
      page={page}
      shape={shape}
      color={color}
      onChange={(_, value) => onChange?.(value)}
      {...props}
    />
  );
}

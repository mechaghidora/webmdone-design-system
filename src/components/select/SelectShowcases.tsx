import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";

import { MenuItem, Select } from "./Select";

const options = [
  { value: "coaching", label: "Coaching" },
  { value: "classes", label: "Classes" },
  { value: "activity", label: "Activity" },
];

function SelectField({
  label,
  defaultValue = "",
  required,
  disabled,
  error,
  helperText,
}: {
  label: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}) {
  const labelId = `${label.replace(/\s+/g, "-").toLowerCase()}-label`;

  return (
    <FormControl fullWidth required={required} disabled={disabled} error={error}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select labelId={labelId} label={label} defaultValue={defaultValue}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  );
}

export function StandardSelectShowcase() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <SelectField label="Standard" defaultValue="coaching" />
      <SelectField label="Required" defaultValue="classes" required />
      <SelectField label="Disabled" defaultValue="activity" disabled />
      <SelectField label="Error" defaultValue="" error helperText="Please select an option" />
    </Stack>
  );
}

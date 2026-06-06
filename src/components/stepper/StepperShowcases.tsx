import { Step, StepLabel, Stepper } from "./Stepper";

const steps = ["Select plan", "Account details", "Review"];

export function AlternativeLabelStepper() {
  return (
    <Stepper activeStep={1} alternativeLabel sx={{ maxWidth: 560 }}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

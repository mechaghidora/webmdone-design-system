import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { Typography } from "../typography";

export function AccordionGroup() {
  return (
    <div style={{ maxWidth: 560 }}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography variant="subtitle1">General settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Collapse panels help reduce visual noise while keeping detailed content one tap away.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography variant="subtitle1">Data and storage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">Details about caching, downloads, and offline access.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
          <Typography variant="subtitle1">Disabled section</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">This content is not reachable while disabled.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

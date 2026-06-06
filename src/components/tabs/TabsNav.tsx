"use client";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";

export type TabsNavProps = {
  labels?: string[];
  /** Tab panel content in label order. Alternative to `children`. */
  panels?: React.ReactNode[];
  children?: React.ReactNode;
  /** Controlled active tab index. */
  value?: number;
  /** Uncontrolled initial tab index. */
  defaultValue?: number;
  onChange?: (value: number) => void;
  /** Optional cap; omit for full-width layout (default). */
  maxWidth?: number | string;
  /** Prefix for tab/panel ids (defaults to React useId). */
  idPrefix?: string;
  "aria-label"?: string;
};

function TabPanel({
  children,
  value,
  index,
  id,
  labelledBy,
}: {
  children?: React.ReactNode;
  value: number;
  index: number;
  id: string;
  labelledBy: string;
}) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={id}
      aria-labelledby={labelledBy}
    >
      {value === index ? children : null}
    </Box>
  );
}

export function TabsNav({
  labels = ["Account settings", "Billing history", "Notifications"],
  panels,
  children,
  value: controlledValue,
  defaultValue = 0,
  onChange,
  maxWidth,
  idPrefix,
  "aria-label": ariaLabel = "Page tabs",
}: TabsNavProps) {
  const generatedId = React.useId();
  const prefix = idPrefix ?? generatedId.replace(/:/g, "");

  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : internalValue;

  const panelContents = panels ?? (children != null ? React.Children.toArray(children) : []);

  const handleChange = (_: React.SyntheticEvent, nextValue: number) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };

  return (
    <Box sx={{ width: "100%", ...(maxWidth != null ? { maxWidth } : {}) }}>
      <Tabs
        value={activeValue}
        onChange={handleChange}
        aria-label={ariaLabel}
        sx={{ width: "100%" }}
      >
        {labels.map((label, index) => (
          <Tab
            key={label}
            label={label}
            id={`${prefix}-tab-${index}`}
            aria-controls={`${prefix}-tabpanel-${index}`}
          />
        ))}
      </Tabs>
      {panelContents.map((panel, index) => (
        <TabPanel
          key={`${prefix}-panel-${index}`}
          value={activeValue}
          index={index}
          id={`${prefix}-tabpanel-${index}`}
          labelledBy={`${prefix}-tab-${index}`}
        >
          {panel}
        </TabPanel>
      ))}
    </Box>
  );
}

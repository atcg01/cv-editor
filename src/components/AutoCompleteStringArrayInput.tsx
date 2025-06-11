import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

interface AutoCompleteStringArrayInputProps {
  source: string;
  label?: string;
  choices?: string[];
}

const AutoCompleteStringArrayInput: React.FC<
  AutoCompleteStringArrayInputProps
> = ({ source, label, choices = [] }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={source}
      control={control}
      render={({ field }) => (
        <Autocomplete
          multiple
          freeSolo
          options={choices}
          value={field.value || []}
          onChange={(_, newValue) => field.onChange(newValue)}
          renderInput={(params) => (
            <TextField {...params} label={label} variant="outlined" fullWidth />
          )}
        />
      )}
    />
  );
};

export default AutoCompleteStringArrayInput;

import { TextField, Button } from "@mui/material";
import { useState } from "react";

function TagField({ onSave }) {
  const [tagString, setTagString] = useState("");
  return (
    <>
      <TextField
        value={tagString}
        onChange={(e) => setTagString(e.target.value)}
        label="Taggar (ange flera separerade med kommatecken)"
        name="tags"
      />
      <Button onClick={() => onSave(tagString)}>Lägg till taggar</Button>
    </>
  );
}

export default TagField;

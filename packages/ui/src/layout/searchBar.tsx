import React from "react";
import { CircularProgress, InputBase } from "@mui/material";

/**
 * Search bar will perform a search operation
 * by inputting user's coinbase or a tx id
 * @constructor
 */
export function SearchBar() {
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const search = React.useCallback(async () => {
    setIsLoading(false);
  }, [value]);

  return (
    <div
      style={{
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: `80vw`,
      }}
    >
      <InputBase
        style={{
          flex: 5,
        }}
        placeholder="Search by any keyword"
        inputProps={{ "aria-label": "Search" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            await search();
            e.preventDefault();
          }
        }}
      />
      {isLoading && <CircularProgress size={20} />}
    </div>
  );
}

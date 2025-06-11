import { Button, useRecordContext } from "react-admin";

export const DownloadButton = () => {
  const record = useRecordContext();
  if (!record) return null;
  const url = "http://localhost:3001/cvs/" + record.id + "/download";
  return (
    <Button href={url} onClick={(e) => e.stopPropagation()}>
      Télécharger
    </Button>
  );
};

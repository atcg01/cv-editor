import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  DateField,
  ArrayField,
  Datagrid,
  TopToolbar,
  EditButton,
  FunctionField,
  WithRecord,
  Labeled,
} from "react-admin";
import { Stack } from "@mui/material";

import { DownloadButton } from "../../components/DownloadButton";

const Actions = () => (
  <TopToolbar>
    <DownloadButton />
    <EditButton />
  </TopToolbar>
);

export const CvShow = () => (
  <Show actions={<Actions />}>
    <SimpleShowLayout>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField source="identite.prenom" />
        <TextField source="identite.nom" />
        <TextField source="identite.poste" />
        <DateField source="contact.date_naissance" />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField source="contact.telephone" />
        <EmailField source="contact.email" />
        <TextField source="contact.situation_familiale" />
        <TextField source="contact.permis" />
      </Stack>

      <ArrayField source="langues">
        <Datagrid bulkActionButtons={false} rowClick={false}>
          <TextField source="langue" />
          <TextField source="niveau" />
        </Datagrid>
      </ArrayField>

      <FunctionField
        source="centres_interet"
        render={(record) => (record.centres_interet || []).join(", ")}
      />

      <FunctionField
        source="competences"
        render={(record) => (record.competences || []).join(", ")}
      />

      <Labeled label="Profil professionel">
        <WithRecord
          render={(record) => {
            return (record.profil_professionnel || []).map((c: string, i) => (
              <p key={i}>{c}</p>
            ));
          }}
        />
      </Labeled>

      <ArrayField source="experiences">
        <Datagrid bulkActionButtons={false} rowClick={false}>
          <TextField source="debut" />
          <TextField source="fin" />
          <TextField source="structure" />
          <TextField source="lieu" />
          <TextField source="poste" />
        </Datagrid>
      </ArrayField>

      <ArrayField source="formations">
        <Datagrid bulkActionButtons={false} rowClick={false}>
          <TextField source="date" />
          <TextField source="intitule" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

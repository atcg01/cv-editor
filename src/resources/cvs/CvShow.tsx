import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  DateField,
  ArrayField,
  SingleFieldList,
  ChipField,
  Datagrid,
  Button,
  TopToolbar,
  EditButton,
} from "react-admin";

const DownloadButton = () => {
  return <Button href="/cvs/1/download">Télécharger</Button>;
};

const Actions = () => (
  <TopToolbar>
    <DownloadButton />
    <EditButton />
  </TopToolbar>
);

export const CvShow = () => (
  <Show actions={<Actions />}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="identite.prenom" />
      <TextField source="identite.nom" />
      <TextField source="identite.poste" />
      <DateField source="contact.date_naissance" />
      <TextField source="contact.telephone" />
      <EmailField source="contact.email" />
      <TextField source="contact.situation_familiale" />
      <TextField source="contact.permis" />

      <ArrayField source="langues">
        <Datagrid>
          <TextField source="langue" />
          <TextField source="niveau" />
        </Datagrid>
      </ArrayField>

      <ArrayField source="centres_interet">
        <SingleFieldList>
          <ChipField source="" />
        </SingleFieldList>
      </ArrayField>

      <ArrayField source="competences">
        <SingleFieldList>
          <ChipField source="" />
        </SingleFieldList>
      </ArrayField>

      <ArrayField source="profil_professionnel">
        <SingleFieldList>
          <ChipField source="" />
        </SingleFieldList>
      </ArrayField>

      <ArrayField source="experiences">
        <Datagrid>
          <TextField source="debut" />
          <TextField source="fin" />
          <TextField source="structure" />
          <TextField source="lieu" />
          <TextField source="poste" />
        </Datagrid>
      </ArrayField>

      <ArrayField source="formations">
        <Datagrid>
          <TextField source="date" />
          <TextField source="intitule" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

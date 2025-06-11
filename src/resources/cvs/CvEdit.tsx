import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
import { Stack } from "@mui/material";
import AutoCompleteStringArrayInput from "../../components/AutoCompleteStringArrayInput";

export const CvEdit = () => (
  <Edit>
    <SimpleForm>
      <Stack direction="row" spacing={2} alignItems="center" width={"100%"}>
        <TextInput source="identite.prenom" />
        <TextInput source="identite.nom" />
        <TextInput source="identite.poste" />
        <DateInput source="contact.date_naissance" />
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" width={"100%"}>
        <TextInput source="contact.telephone" />
        <TextInput source="contact.email" />
        <TextInput source="contact.situation_familiale" />
        <TextInput source="contact.permis" />
      </Stack>

      <ArrayInput source="langues">
        <SimpleFormIterator>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextInput source="langue" />
            <TextInput source="niveau" />
          </Stack>
        </SimpleFormIterator>
      </ArrayInput>

      <AutoCompleteStringArrayInput
        source="centres_interet"
        label="Centre d'intérêts"
      />

      <AutoCompleteStringArrayInput source="competences" label="Compétences" />

      <ArrayInput source="profil_professionnel">
        <SimpleFormIterator>
          <TextInput source="" multiline />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="experiences">
        <SimpleFormIterator>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextInput source="debut" />
            <TextInput source="fin" />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextInput source="structure" />
            <TextInput source="lieu" />
            <TextInput source="poste" />
          </Stack>
          <TextInput source="description" multiline />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="formations">
        <SimpleFormIterator>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextInput source="date" />
            <TextInput source="intitule" />
          </Stack>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

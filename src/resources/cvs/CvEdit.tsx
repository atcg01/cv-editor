import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

export const CvEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="identite.prenom" />
      <TextInput source="identite.nom" />
      <TextInput source="identite.poste" />

      <DateInput source="contact.date_naissance" />
      <TextInput source="contact.telephone" />
      <TextInput source="contact.email" />
      <TextInput source="contact.situation_familiale" />
      <TextInput source="contact.permis" />

      <ArrayInput source="langues">
        <SimpleFormIterator>
          <TextInput source="langue" />
          <TextInput source="niveau" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="centres_interet">
        <SimpleFormIterator>
          <TextInput source="" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="competences">
        <SimpleFormIterator>
          <TextInput source="" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="profil_professionnel">
        <SimpleFormIterator>
          <TextInput source="" multiline />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="experiences">
        <SimpleFormIterator>
          <TextInput source="debut" />
          <TextInput source="fin" />
          <TextInput source="structure" />
          <TextInput source="lieu" />
          <TextInput source="poste" />
        </SimpleFormIterator>
      </ArrayInput>

      <ArrayInput source="formations">
        <SimpleFormIterator>
          <TextInput source="date" />
          <TextInput source="intitule" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

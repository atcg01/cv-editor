import { List, Datagrid, TextField, EmailField, DateField } from "react-admin";

export const CvList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="identite.prenom" label="Prénom" />
      <TextField source="identite.nom" label="Nom" />
      <TextField source="identite.poste" label="Poste" />
      <EmailField source="contact.email" label="Email" />
      <TextField source="contact.telephone" label="Téléphone" />
      <DateField source="contact.date_naissance" label="Date de naissance" />
    </Datagrid>
  </List>
);

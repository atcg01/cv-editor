import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { Layout } from "./Layout";
import { CvEdit } from "./resources/cvs/CvEdit";
import { CvShow } from "./resources/cvs/CvShow";
import { CvList } from "./resources/cvs/CvList";
import { CvCreate } from "./resources/cvs/CvCreate";
import { Dashboard } from "./dashboard/Dashboard";
import "./style.css";

const dataProvider = simpleRestProvider("http://localhost:3001");

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="cvs"
      create={CvCreate}
      edit={CvEdit}
      list={CvList}
      show={CvShow}
    />
  </Admin>
);

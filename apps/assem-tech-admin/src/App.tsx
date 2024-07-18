import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SkinList } from "./skin/SkinList";
import { SkinCreate } from "./skin/SkinCreate";
import { SkinEdit } from "./skin/SkinEdit";
import { SkinShow } from "./skin/SkinShow";
import { WeaponList } from "./weapon/WeaponList";
import { WeaponCreate } from "./weapon/WeaponCreate";
import { WeaponEdit } from "./weapon/WeaponEdit";
import { WeaponShow } from "./weapon/WeaponShow";
import { PatternList } from "./pattern/PatternList";
import { PatternCreate } from "./pattern/PatternCreate";
import { PatternEdit } from "./pattern/PatternEdit";
import { PatternShow } from "./pattern/PatternShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AssemTech"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Skin"
          list={SkinList}
          edit={SkinEdit}
          create={SkinCreate}
          show={SkinShow}
        />
        <Resource
          name="Weapon"
          list={WeaponList}
          edit={WeaponEdit}
          create={WeaponCreate}
          show={WeaponShow}
        />
        <Resource
          name="Pattern"
          list={PatternList}
          edit={PatternEdit}
          create={PatternCreate}
          show={PatternShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

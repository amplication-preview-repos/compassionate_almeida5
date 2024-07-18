import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WEAPON_TITLE_FIELD } from "../weapon/WeaponTitle";
import { PATTERN_TITLE_FIELD } from "../pattern/PatternTitle";

export const SkinList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Skins"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <ReferenceField label="Weapon" source="weapon.id" reference="Weapon">
          <TextField source={WEAPON_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Pattern" source="pattern.id" reference="Pattern">
          <TextField source={PATTERN_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

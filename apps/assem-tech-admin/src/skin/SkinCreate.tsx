import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WeaponTitle } from "../weapon/WeaponTitle";
import { PatternTitle } from "../pattern/PatternTitle";

export const SkinCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="weapon.id" reference="Weapon" label="Weapon">
          <SelectInput optionText={WeaponTitle} />
        </ReferenceInput>
        <ReferenceInput source="pattern.id" reference="Pattern" label="Pattern">
          <SelectInput optionText={PatternTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WeaponTitle } from "../weapon/WeaponTitle";
import { PatternTitle } from "../pattern/PatternTitle";

export const SkinEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

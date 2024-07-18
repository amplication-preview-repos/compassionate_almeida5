import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { WEAPON_TITLE_FIELD } from "../weapon/WeaponTitle";
import { PATTERN_TITLE_FIELD } from "../pattern/PatternTitle";

export const SkinShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

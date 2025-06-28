export type EditPerioticElementPropertyName = 'position' | 'name' | 'weight' | 'symbol';

export type EditPerioticElement = {
  id: string;
  editPerioticElementPropertyName: EditPerioticElementPropertyName;
  value: string;
}

export type EditPeriodicElementResult = {
  id: string;
  editPerioticElementPropertyName: EditPerioticElementPropertyName;
  value: string;
}

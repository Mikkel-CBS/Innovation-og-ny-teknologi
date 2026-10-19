import { colors } from './colors';
import { formStyles } from './formStyles';
import { groupStyles } from './groupStyles';
import { layoutStyles } from './layoutStyles';
import { navigationStyles } from './navigationStyles';
import { profileStyles } from './profileStyles';

// Facade for styles: eksisterende imports kan fortsat hente styles ét sted fra.
export { colors, navigationStyles };

// Samler de opdelt styles, så screens kan bruge globalStyles som tidligere.
export const globalStyles = {
  ...layoutStyles,
  ...groupStyles,
  ...formStyles,
  ...profileStyles,
};

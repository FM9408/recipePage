//
import Card from './Card';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import MenuItem from "./MenuItem"
import Typography from './Typography';
import Appbar from './Appbar';
// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Input(theme),
    Paper(theme),
    Button(theme),
    Typography(theme),
    Appbar(theme),
    MenuItem(theme),
  );
}

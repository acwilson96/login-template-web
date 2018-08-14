import * as React                                     from 'react';

import ListItem                                       from '@material-ui/core/ListItem';
import ListItemIcon                                   from '@material-ui/core/ListItemIcon';
import ListItemText                                   from '@material-ui/core/ListItemText';
import InfoIcon                                       from '@material-ui/icons/Info';

import { ClickHandlerFunc }                           from '../Types';

const drawerJSX: ((clickHandler: ClickHandlerFunc, uniqueID: string, key: number) => JSX.Element) = (clickHandler: ClickHandlerFunc, uniqueID: string, key: number) => (
  /*  Change the JSX of how you want your Drawer Element to Look Here.  */
  <ListItem button={true} id={uniqueID} onClick={clickHandler} key={key}>
    <ListItemIcon>
      <InfoIcon />
    </ListItemIcon>
    <ListItemText primary="App Instructions" />
  </ListItem>
);

export default drawerJSX;
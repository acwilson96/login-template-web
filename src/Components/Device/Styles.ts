import { Theme } from '@material-ui/core/styles';

import { createStyles }         from '@material-ui/core';
import { WithStyles }           from '@material-ui/core/styles/withStyles';

const deviceClasses = (theme: Theme) => createStyles({
  activeDevice: {
    ...theme.typography.button,
    color:  'green',
  },
  deviceContainer: {
  },
  root: {
    ...theme.mixins.gutters(),
    borderRadius: 0,
    maxWidth: 355,
    minWidth: 327,
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
  },
});

interface IDeviceStyle extends WithStyles<typeof deviceClasses> {};

export { deviceClasses, IDeviceStyle };
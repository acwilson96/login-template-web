import { Theme }                                      from '@material-ui/core/styles';

import { createStyles }                               from '@material-ui/core';
import { WithStyles }                                 from '@material-ui/core/styles/withStyles';

const appClasses = (theme: Theme) => createStyles({
  loadingContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  }
});

interface IAppStyle extends WithStyles<typeof appClasses> {};

export { appClasses, IAppStyle };
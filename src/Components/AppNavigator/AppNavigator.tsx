/* Components/AppNavigator/AppNavigator.tsx */

import * as React                                     from 'react';

/* Material-UI Comonents */
import AppBar                                         from '@material-ui/core/AppBar';
import Divider                                        from '@material-ui/core/Divider';
import Drawer                                         from '@material-ui/core/Drawer';
import Hidden                                         from '@material-ui/core/Hidden';
import IconButton                                     from '@material-ui/core/IconButton';
import List                                           from '@material-ui/core/List';
import Slide                                          from '@material-ui/core/Slide';
import Toolbar                                        from '@material-ui/core/Toolbar';
import Typography                                     from '@material-ui/core/Typography';
import MenuIcon                                       from '@material-ui/icons/Menu';
import SettingsRoundedIcon                            from '@material-ui/icons/SettingsRounded';

/* Project Components */
import navigatorPanes                                 from '../NavigatorPanes';
import SettingsMenu                                   from '../SettingsMenu';

/* Project Types */
import { NavigatorPane }                              from '../NavigatorPanes/Types';
import { AppNavigatorProps, AppNavigatorState }       from './Types';

class AppNavigator extends React.Component<AppNavigatorProps, AppNavigatorState> {

  constructor(props: AppNavigatorProps) {
    super(props);
    const initNavigatorPanes = navigatorPanes(this.clickPane);
    this.state = {
      activePane:       initNavigatorPanes[0],
      mobileOpen:       false,
      mobileWasOpen:    true,
      navigatorPanes:   initNavigatorPanes,
      settingsOpen:     false,
    };
  }

  public render() {
    const { classes, currentUser } = this.props;
    
    const drawer = (
      <div>
        <div className={(this.state.mobileOpen) ? classes.drawerHeader : classes.toolbar}>
          <Typography variant="title" color="inherit" noWrap={true}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <p className={classes.drawerTitle} style={{flexGrow: 1, color: (this.state.mobileOpen)?'white':'black'}}>
                {currentUser.username}
              </p>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                style={{margin: 9, color: (this.state.mobileOpen) ? 'white' : 'black'}}
                onClick={this.toggleSettings}
              >
                <SettingsRoundedIcon />
              </IconButton>
            </div>
          </Typography>
        </div>
        <Divider />
        <List>
          <div>
            {this.state.navigatorPanes.map((navigatorPane: NavigatorPane, index: number) => navigatorPane.drawerElement)}
          </div>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <Slide direction="up" in={this.state.settingsOpen} mountOnEnter={true} unmountOnExit={true}>
          <div className={classes.settingsPopup}>
            <SettingsMenu closeSettings={this.toggleSettings} />
          </div>
        </Slide>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.drawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap={true}>
              {this.state.activePane.paneTitle}</Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp={true}>
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={this.state.mobileOpen}
            onClose={this.drawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown={true} implementation="css">
          <Drawer
            variant="permanent"
            open={true}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Typography variant="title" gutterBottom={true}>
              {this.state.activePane.paneElement}
            </Typography>
        </main>
      </div>
    );

  }

  private drawerToggle = () => {
    this.setState(state => ({
      mobileOpen:     !state.mobileOpen,
      mobileWasOpen:  !state.mobileOpen,
    }));
  };

  private toggleSettings = () => {
    this.props.setCurrentUserAction(this.props.authState.authToken);
    if (this.state.settingsOpen === true) {
      this.setState({
        mobileOpen:   this.state.mobileWasOpen,
        settingsOpen: false,
      })
    }
    else if (this.state.mobileOpen) {
      this.setState({
        mobileOpen:     false,
        mobileWasOpen:  true,
        settingsOpen: true
      });
    }
    else {
      this.setState({
        mobileOpen:     false,
        mobileWasOpen:  false,
        settingsOpen:   true,  
      })
    }
  };

  private clickPane = (event: React.MouseEvent<HTMLElement>) => {
    const paneClicked = event.currentTarget.id;
    const activePane  = this.state.navigatorPanes.filter((pane: NavigatorPane) => pane.selectorID === paneClicked)[0];
    this.setState({
      activePane,
      mobileOpen:     false,
      mobileWasOpen:  false,
    });
  }
  
}

export default AppNavigator;
/* Componets/SettingsMenu/Types.ts */

import { Dispatch }                                   from 'redux';
import * as Models                                    from '../../Models';
import { AuthStateType }                              from '../../State/Store/Types'
import { ISettingsMenuStyle }                         from './Styles';

interface ISettingsMenuProps {
  closeSettings:        () => void;
  authState:            AuthStateType;
  devices:              Models.Device[];
  setAuthStateAction:   (authToken: string) => ((dispatch: Dispatch) => void);
  setCurrentUserAction: (authToken: string) => ((dispatch: Dispatch) => void);
}

interface ISettingsMenuState {
  confirmationLogoutAlertOpen: boolean;
}

type SettingsMenuProps = ISettingsMenuProps & ISettingsMenuStyle;
type SettingsMenuState = ISettingsMenuState;

export { SettingsMenuProps, SettingsMenuState };
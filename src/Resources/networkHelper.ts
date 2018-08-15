import axios                                          from 'axios';

const network = {

    // Gets a CSRF token from API, and returns it in a callback.
    getCSRF(cb: (csrfToken: string) => void) {
      axios.get('http://login-template-web.herokuapp.com' + '/csrfToken', {
        withCredentials: true,
      })
      .then((response) => {
        return cb(response.data._csrf);
      })
      .catch((error) => {
        // tslint:disable-next-line:no-console
        console.log(error);
        return cb('');
      })
    },

}

export default network;
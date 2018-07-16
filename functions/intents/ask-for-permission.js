const { Permission } = require('actions-on-google');

module.exports = {

  'ask_for_permission': (conv) => {
    const options = {
      context: 'Need location to report the issue',
      // Ask for more than one permission. User can authorize all or none.
      permissions: ['DEVICE_PRECISE_LOCATION'],
    };
    conv.ask(new Permission(options));
  },

  'ask_for_permission_confirmation': (conv, params, confirmationGranted) => {
    const { location } = conv.device;
    if (confirmationGranted) {
      if (name) {
        conv.ask(`Thank you for that.`);
      }
      if (location) {
        const { latitude, longitude } = location.coordinates;
      }
    } else {
      conv.ask(`Okay, yeah that's fine`);
    }
  },

};
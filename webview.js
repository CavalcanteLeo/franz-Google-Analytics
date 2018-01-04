'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    const elements = document.getElementsByClassName('suite-preview-bell-badge');
    Franz.setBadge(0, elements.length ? 1 : 0 );
  };

  Franz.loop(getMessages);
};

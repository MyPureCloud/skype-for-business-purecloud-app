import Ember from 'ember';

const {
    Route,
} = Ember;

export default Route.extend({
    beforeModel() {
        window.location.href = window.location.origin + '/skype-for-business-purecloud-app/';
    }
});

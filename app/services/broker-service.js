import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

/*
 Prettify objects returned from Salesforce. This is optional, but it allows us to keep the templates independent
 from the Salesforce specific naming convention. This could also be done Salesforce-side by creating a custom REST service.
 */
let prettifyBroker = (broker) => {
    return {
        id: broker.sfid,
        name: broker.name,
        title: broker.title__c,
        picture: broker.picture__c,
        phone: broker.phone__c,
        mobilePhone: broker.mobile_phone__c,
        email: broker.email__c
    };
};

@Injectable()
export class BrokerService {

    static get parameters() {
        return [Http];
    }

    constructor(http) {
        this.http = http;
    }

    findAll() {
        return this.http.get('/broker').map(response => response.json().map(prettifyBroker));
    }

    findById(id) {
        return this.http.get('/broker/' + id).map(response => prettifyBroker(response.json()));
    }

}
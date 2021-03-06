import {Orders} from './Orders.js';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'

Meteor.methods({
    'orders.add'(item){
        item.userId = Meteor.userId();
        item.place = Meteor.users.findOne({'_id':Meteor.userId()}).profile.placeName;
        let currentdate = new Date().toLocaleString();
        item.createdAt = currentdate;
        return Orders.insert(item);
    },
    'orders.remove'(itemId){
        return Orders.remove(itemId);
    },
    'orders.update'(itemId, item){
        return Orders.update(itemId, item);
    },
    'orders.delivered'(itemId, item){
        item.delivered != item.delivered;
        return Orders.update(itemId, item);
    }
});

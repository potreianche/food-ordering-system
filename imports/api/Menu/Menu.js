import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';

SimpleSchema.defineValidationErrorTransform(error => {
   const ddpError = new Meteor.Error(error.message);
   ddpError.error = 'validation-error';
   ddpError.details = error.details;
   return ddpError;
 });

export const Menu = new Mongo.Collection('menu');

Menu.schema = new SimpleSchema({
    _id: String,
   name: String,
   price: Number,
}, { requiredByDefault: false, check});


export const interface = {
   insert: function(){
       return 'menu.add';
   },
   delete: function(){
       return 'menu.remove';
   },
   update: function(){
       return 'menu.update';
   }
}



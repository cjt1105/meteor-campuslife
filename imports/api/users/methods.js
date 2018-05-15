import { Meteor } from "meteor/meteor";
import { resolve } from "dns";
import { reject } from "bcrypt/lib/promises";
import  bcrypt  from "bcrypt";
import jwt from 'jsonwebtoken';
import secret from '../../../config'

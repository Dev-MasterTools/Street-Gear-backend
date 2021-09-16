import * as mongoose from 'mongoose';

export const ProdcutsSchema = new mongoose.Schema({
	name: { type: String },
	image: { type: String },
	price: { type: String },
    category: { type: String },
	reviews: { type: String },
    status: { type: String },
    
});

export interface Product extends mongoose.Document
{
	name: string;
    image: string;
    price: string;
    category: string;
    reviews: string;
    status: string;

}
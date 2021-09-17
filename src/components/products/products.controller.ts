import { ProductsService } from './products.service';
import { Body,Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ProductsController 
{
  constructor(private readonly ___product: ProductsService) {}

  //Adding the product, calling the service to handle the add
  @Post()
	async addProduct(@Body() product : { name: string, image: string, price: string, category: string, reviews: string, status: string })
  {
		return await this.___product.addProduct(product);
	}

  @Get()
	async getAllProducts()
  {
		return await this.___product.getAllProducts();
	}





}
